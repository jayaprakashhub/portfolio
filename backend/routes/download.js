const express = require('express');
const router = express.Router();
const path = require('path');
const DownloadLog = require('../models/DownloadLog'); // adjust path if needed

router.post("/", async (req, res) => {
  try {
    // Logging
    const ip = req.ip || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent') || "Unknown";

    const newDownload = new DownloadLog({ ip, userAgent });
    await newDownload.save();

    console.log(`[${new Date().toISOString()}] CV downloaded by IP: ${ip}`);

    // File path
    const cvPath = path.join(__dirname, "..", "cv", "JPResume.pdf");

    // Send the file
    res.download(cvPath, "Jayaprakash-CV.pdf", (err) => {
      if (err) {
        console.error("Download error:", err);
        res.status(500).json({ error: "Failed to download CV" });
      }
    });
  } catch (err) {
    console.error("Logging failed:", err);
    res.status(500).json({ error: "Failed to log and download CV" });
  }
});

module.exports = router;
