const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contact');
const downloadRoutes = require('./routes/download');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'https://portfolio-jp-j1em.onrender.com',
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

app.use('/api/contact', contactRoutes);
app.use('/api/download-cv', downloadRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));
