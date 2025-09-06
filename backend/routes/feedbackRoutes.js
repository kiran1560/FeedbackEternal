
const express = require('express');
const Feedback = require('../models/Feedback');

const router = express.Router();

/**
 * POST: Submit Feedback
 */
router.post('/', async (req, res) => {
  try {
    const { name, email, course, faculty, rating, improvement } = req.body;

    const newFeedback = new Feedback({
      name,
      email,
      course,
      faculty,
      rating,
      improvement
    });

    await newFeedback.save();
    res.status(201).json({ message: "Feedback submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to submit feedback" });
  }
});

/**
 * GET: Get All Feedback (raw list)
 */
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch feedback" });
  }
});

/**
 * GET: Summarized Feedback by Faculty
 */
router.get('/summary', async (req, res) => {
  try {
    const summary = await Feedback.aggregate([
      {
        $group: {
          _id: "$faculty",
          count: { $sum: 1 },
          avgRating: { $avg: "$rating" },
          ratings: { $push: "$rating" },
          comments: { $push: "$improvement" }
        }
      },
      {
        $project: {
          _id: 0,
          faculty: "$_id",
          count: 1,
          avgRating: { $round: ["$avgRating", 2] },
          ratings: 1,
          comments: 1
        }
      }
    ]);

    res.json(summary);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to summarize feedback" });
  }
});


module.exports = router;
