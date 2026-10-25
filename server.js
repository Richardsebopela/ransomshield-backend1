const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors());

// In-memory database for demo & hackathon presentation
let reportsLog = [];
let knownThreats = ["ransom", "encrypt", "extortion", "payload", "malware", "lockbit", "hack"];

// 1. Root Health Check Endpoint (Returns 200 OK so frontend shows "Online")
app.get('/', (req, res) => {
    res.json({ status: "RansomShield ZA Backend Active", version: "1.0.0" });
});

// 2. Heuristic Threat Scanner Endpoint
app.post('/api/check', (req, res) => {
    const { data } = req.body;
    
    if (!data) {
        return res.status(400).json({ error: "No payload provided for scanning." });
    }

    // Simple heuristic analysis simulation
    const lowerData = data.toLowerCase();
    const matchedThreats = knownThreats.filter(keyword => lowerData.includes(keyword));
    const isDangerous = matchedThreats.length > 0 || lowerData.length > 100;

    const analysisResult = {
        verdict: isDangerous ? "HIGH RISK / MALICIOUS" : "SAFE / LOW RISK",
        threatScore: isDangerous ? 88 : 12,
        indicatorsMatched: matchedThreats.length > 0 ? matchedThreats : ["None detected"],
        recommendation: isDangerous 
            ? "Isolate affected endpoint immediately and review POPIA incident logging protocols." 
            : "No immediate threat indicators found in heuristic scan.",
        timestamp: new Date().toISOString()
    };

    res.json(analysisResult);
});

// 3. Post Incident Report Endpoint
app.post('/api/reports', (req, res) => {
    const { incident } = req.body;

    if (!incident) {
        return res.status(400).json({ error: "Incident details required." });
    }

    const newReport = {
        id: reportsLog.length + 1,
        details: incident,
        status: "Pending Investigation",
        loggedAt: new Date().toLocaleTimeString()
    };

    reportsLog.unshift(newReport); // Add to the beginning of the array
    res.status(201).json({ success: true, report: newReport });
});

// 4. Get Logged Incidents Endpoint
app.get('/api/reports', (req, res) => {
    res.json({ reports: reportsLog });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🛡️ RansomShield ZA Backend running successfully on http://localhost:${PORT}`);
}); 