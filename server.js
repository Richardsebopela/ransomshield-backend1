const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Temporary In-Memory Database Arrays (for prototyping)
const reports = [];
const scannedItems = [];

// 1. Health Check Route
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    service: 'RansomShield ZA API',
    version: '1.0.0'
  });
});

// 2. Simulated Link / Message Check Endpoint
app.post('/api/check', (req, res) => {
  const { input } = req.body;

  if (!input) {
    return res.status(400).json({ error: 'Input text or link is required.' });
  }

  const lowerInput = input.toLowerCase();
  let riskScore = 10;
  let verdict = 'Safe';
  let matchedHeuristics = [];

  if (lowerInput.includes('urgent') || lowerInput.includes('win') || lowerInput.includes('prize') || lowerInput.includes('verify')) {
    riskScore = 75;
    verdict = 'Suspicious';
    matchedHeuristics.push('Contains high-pressure or urgency keywords');
  }

  if (lowerInput.includes('http://') || lowerInput.includes('bit.ly') || lowerInput.includes('free-gift')) {
    riskScore = 90;
    verdict = 'Dangerous';
    matchedHeuristics.push('Unencrypted protocol or known shortened link pattern');
  }

  const scanResult = {
    id: Date.now().toString(),
    input,
    riskScore,
    verdict,
    matchedHeuristics,
    timestamp: new Date().toISOString()
  };

  scannedItems.push(scanResult);
  res.json(scanResult);
});

// 3. Submit an Incident Report Endpoint
app.post('/api/reports', (req, res) => {
  const { fullName, phoneNumber, issueType, websiteUrl, details } = req.body;

  if (!fullName || !phoneNumber || !issueType || !details) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  const newReport = {
    id: Date.now().toString(),
    fullName,
    phoneNumber,
    issueType,
    websiteUrl: websiteUrl || 'N/A',
    details,
    status: 'Pending Review',
    createdAt: new Date().toISOString()
  };

  reports.push(newReport);

  res.status(201).json({
    success: true,
    message: 'Incident report submitted successfully. Our security team will review it.',
    reportId: newReport.id
  });
});

// 4. Get All Incident Reports (For Admin Dashboard)
app.get('/api/reports', (req, res) => {
  res.json({
    count: reports.length,
    reports
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`RansomShield ZA backend running on http://localhost:${PORT}`);
}); 