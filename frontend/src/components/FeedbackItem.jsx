const FeedbackItem = ({ feedback }) => {
  return (
    <div className="feedback-item">
      <h3>{feedback.name} ({feedback.email}) : {feedback.course}</h3>
      <p><strong>Faculty:</strong> {feedback.faculty}</p>
      <p><strong>Rating:</strong> ⭐ {feedback.rating}</p>
      <p><strong>Improvement:</strong> {feedback.improvement || "No suggestions"}</p>
      <small>Submitted: {new Date(feedback.createdAt).toLocaleString()}</small>
    </div>
  );
};

export default FeedbackItem;
