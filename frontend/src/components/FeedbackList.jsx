import { useEffect, useState } from "react";
import { getFeedbacks } from "../services/api";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getFeedbacks();
      setFeedbacks(data);
    };
    fetchData();
  }, []);

  return (
     <div className="feedback-list">
      
      <h2 className="feed">All Feedback</h2>
      {feedbacks.length > 0 ? (
        feedbacks.map((fb) => <FeedbackItem key={fb._id} feedback={fb} />)
      ) : (
        <p>No feedback yet.</p>
      )}
    </div>
  );
};

export default FeedbackList;
