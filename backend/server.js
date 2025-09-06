const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


app.use('/api/feedback', feedbackRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch(err => console.error('DB connect error:', err));
