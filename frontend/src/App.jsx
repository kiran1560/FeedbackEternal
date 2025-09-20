import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormPage from "./pages/FormPage";
import FeedbackPage from "./pages/FeedbackPage";
import FacultySummary from "./pages/FacultySummary";

import "./App.css";
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-blue-600 text-white p-4 flex justify-between">
          <h1 className="font-bold text-lg">Student Feedback Manager</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">
              Submit Feedback
            </Link>
            <Link to="/feedback" className="hover:underline">
              View Feedback
            </Link>
            <Link to="/summary" className="hover:underline">
  Summary
</Link>

          </div>
        </nav>

        {/* Routes */}
        <main className="p-4">
          <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/summary" element={<FacultySummary />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
