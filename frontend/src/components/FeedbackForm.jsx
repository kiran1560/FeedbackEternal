import { useState } from "react";
import { submitFeedback } from "../services/api";

const FeedbackForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "BCA Year 1 (2024-2027)",
    faculty: "Meenakshi",
    rating: 1,
    improvement: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitFeedback(form);
      setMessage("✅ Feedback submitted successfully!");
      // Reset form
      setForm({
        name: "",
        email: "",
        course: "BCA Year 1 (2024-2027)",
        faculty: "Meenakshi",
        rating: 1,
        improvement: ""
      });
    } catch (error) {
      // Log full error for debugging
      console.error("Submission failed:", error.response?.data || error.message);
      setMessage("❌ Failed to submit feedback");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Student Feedback Form</h2>

<label className="block mb-1">Name : </label>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full p-2 border mb-2"
      />
<br></br>
<label className="block mb-1">Email : </label>
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full p-2 border mb-2"
      />
<br></br>
<label className="block mb-1">Course : </label>
      <select
        name="course"
        value={form.course}
        onChange={handleChange}
        className="w-full p-2 border mb-2"
      >
        <option>BCA Year 1 (2024-2027)</option>
        <option>BCA Year 2 (2025-2028)</option>
      </select>
<br></br>
<label className="block mb-1">Faculty : </label>
      <select
        name="faculty"
        value={form.faculty}
        onChange={handleChange}
        className="w-full p-2 border mb-2"
      >
        <option>Meenakshi</option>
        <option>Kiranpreet</option>
        <option>Karuna</option>
        <option>Ashwini</option>
        <option>Pratieksha</option>
      </select>
<br></br>

<label className="block mb-2 font-medium text-blue-800">Rating :</label>
<div className="rating-group">
  {[1, 2, 3, 4, 5].map((num) => (
    <label key={num} className="rating-label">
      <input
        type="radio"
        name="rating"
        value={num}
        checked={form.rating === num}
        onChange={(e) =>
          setForm({ ...form, rating: parseInt(e.target.value) })
        }
        required
      />
      <span>{num}</span>
    </label>
  ))}
</div>



<br></br>
<label className="block mb-1">Improvement : </label>
      <textarea
        name="improvement"
        placeholder="Suggestions for improvement"
        value={form.improvement}
        onChange={handleChange}
        className="w-full p-2 border mb-2"
      ></textarea>
<br></br>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit Feedback
      </button>

      {message && <p className="mt-2">{message}</p>}
    </form>
  );
};

export default FeedbackForm;
