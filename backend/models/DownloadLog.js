const mongoose = require('mongoose');

const downloadLogSchema = new mongoose.Schema({
  ip: String,
  userAgent: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DownloadLog', downloadLogSchema);
