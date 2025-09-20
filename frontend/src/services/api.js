import axios from "axios";

// Adjust if your backend runs on a different port
const API = axios.create({
  baseURL: "http://localhost:5000/api/feedback",
});

// Submit new feedback
export const submitFeedback = (feedbackData) => API.post("/", feedbackData);

// Get all feedback
export const getFeedbacks = () => API.get("/");

// Get feedback summary
export const getSummary = () => API.get("/summary");
