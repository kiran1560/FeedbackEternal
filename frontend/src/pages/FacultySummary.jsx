import { useEffect, useState } from "react";
import { getSummary } from "../services/api"; // create this API function
import "./FacultySummary.css";

const FacultySummary = () => {
  const [summary, setSummary] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const { data } = await getSummary();
        setSummary(data);
      } catch (err) {
        console.error("Failed to fetch summary:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSummary();
  }, []);

  if (loading) return <p className="text-center mt-10 text-blue-800">Loading summary...</p>;

  if (summary.length === 0)
    return <p className="text-center mt-10 text-blue-800">No summary data available.</p>;

  return (
    <div className="summary-container">
      <h2 className="summary-title">Faculty Feedback Summary</h2>
      <div className="summary-grid">
        {summary.map((faculty) => (
          <div key={faculty.faculty} className="summary-card">
            <h3>{faculty.faculty}</h3>
            <p><strong>Total Feedback:</strong> {faculty.count}</p>
            <p><strong>Average Rating:</strong> {faculty.avgRating} ⭐</p>
            <div>
              <strong>Comments:</strong>
              <ul className="comment-list">
                {faculty.comments.filter(c => c).map((c, index) => (
                  <li key={index}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultySummary;
