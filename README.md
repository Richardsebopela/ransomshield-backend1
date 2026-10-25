# 🛡️ RansomShield ZA

> **Empowering South African communities, small businesses, and healthcare facilities with accessible, AI-driven ransomware prevention, phishing detection, and rapid incident response.**

---

## 📌 Overview
**RansomShield ZA** is a localized cybersecurity platform designed to combat the rising tide of ransomware attacks, phishing campaigns, and digital extortion targeting organizations and individuals in South Africa. 

Recognizing that advanced security tools are often inaccessible or too complex for resource-constrained environments—and that many citizens rely on feature phones—RansomShield ZA bridges the gap by combining a responsive web application with a simulated **USSD interface (`*120*SHIELD#`)**, multi-language support, and POPIA-compliant incident reporting.

---

## ✨ Key Features

* **🤖 AI Threat & Link Detector:** Instantly analyzes suspicious URLs, emails, and SMS links against known threat intelligence indicators.
* **📱 USSD & Feature Phone Access (`*120*SHIELD#`):** Ensures cybersecurity resources and alert mechanisms remain accessible even without a smartphone or stable internet connection.
* **📋 POPIA-Compliant Incident Reporting:** Allows victims to securely log cyberattacks, upload evidence (such as screenshot verification), and track case statuses.
* **🌐 Multi-Language Support:** Localized options to break down language barriers and protect diverse South African communities.
* **📊 Real-Time Admin Dashboard:** Empowers security teams and responders to triage incoming reports, review threat logs, and monitor trends.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (Vanilla / Responsive Design)
* **Backend:** Node.js, Express.js
* **Data Storage / State:** LocalStorage (Prototype) / MongoDB or PostgreSQL (Production-ready design)
* **Integration Points:** USSD Gateway simulation, RESTful API architecture

---

## 📂 Project Structure

```text
ransom-shield-za/
├── client/                  # Frontend user interface
│   ├── index.html           # Main application dashboard & views
│   ├── style.css            # Custom styling & responsive layouts
│   └── app.js               # Client-side logic & API integration
├── server/                  # Backend server component
│   ├── server.js            # Express server, API routes, & threat logic
│   └── package.json         # Node.js dependencies & scripts
└── README.md                # Project documentation