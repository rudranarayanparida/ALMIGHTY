# 🛡️ ALMIGHTY: AI-Powered Malware Detection System

An intelligent malware detection platform that combines **Machine Learning-based static analysis** with **VirusTotal threat intelligence** to identify malicious files and provide real-time security insights through a modern web dashboard.

## 🚀 Features

* 🔐 Secure JWT-based Authentication (Login & Registration)
* 📂 File Upload and Malware Scanning
* 🤖 AI-Based Malware Detection using EMBER + LightGBM
* 🌐 VirusTotal API Integration for Threat Verification
* 📊 Interactive Dashboard with Analytics & Visualizations
* 📈 Malware Distribution Charts
* 👤 User Management & Access Control
* 🗄️ MySQL Database Integration
* 🎨 Modern Angular Admin Dashboard UI

---

## 🏗️ System Architecture

```text
User
 │
 ▼
Angular Frontend
 │
 ▼
Django REST API
 │
 ├── JWT Authentication
 │
 ├── Malware Scanner
 │      │
 │      ├── EMBER Feature Extraction
 │      ├── LightGBM Model Prediction
 │      └── VirusTotal Analysis
 │
 ▼
MySQL Database
```

---

## 🛠️ Tech Stack

### Frontend

* Angular
* TypeScript
* HTML5
* CSS3
* ng2-charts
* Chart.js

### Backend

* Django
* Django REST Framework
* JWT Authentication
* Python

### Machine Learning

* EMBER Dataset Features
* LightGBM
* NumPy
* Pandas
* Scikit-learn

### Database

* MySQL

### Security Intelligence

* VirusTotal API

---

## 🤖 AI Malware Detection Pipeline

### 1. Feature Extraction

Uploaded files are processed using EMBER-style feature extraction techniques to generate numerical representations of file characteristics.

### 2. Machine Learning Prediction

Extracted features are passed into a pre-trained LightGBM model which classifies files as:

* Benign
* Malicious

### 3. VirusTotal Verification

The file hash is analyzed using VirusTotal APIs to cross-check against known malware signatures and threat intelligence databases.

### 4. Hybrid Decision Engine

The final detection result combines:

* AI Model Prediction
* VirusTotal Analysis

to improve reliability and detection accuracy.

---

## 📊 Dashboard Analytics

The dashboard provides:

* Total Files Scanned
* Malicious Files Detected
* Benign Files Detected
* Malware Distribution Visualization
* Scan History Insights

---

## 🔑 Authentication Flow

### Registration

Users can create accounts using:

* Username
* Email
* Password

### Login

Authenticated users receive a JWT token used for securing API requests and accessing protected routes.

---

## 📂 Project Structure

```text
Frontend/
│
├── src/app
│   ├── Login
│   ├── Home
│   ├── Dashboard
│   ├── Upload
│   ├── Layout
│   ├── auth.guard.ts
│   ├── auth.interceptor.ts
│   └── api.service.ts
│
Backend/
│
├── malwareapp
│   ├── views.py
│   ├── models.py
│   ├── urls.py
│   ├── feature_extractor.py
│   ├── ai_model.py
│   ├── virustotal.py
│   └── auth_urls.py
│
├── backend
│   └── settings.py
│
└── manage.py
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/malware-detection-system.git
cd malware-detection-system
```

### Backend Setup

```bash
pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

### Frontend Setup

```bash
npm install

ng serve
```

Frontend:

```text
http://localhost:4200
```

Backend:

```text
http://127.0.0.1:8000
```

---

## 🔮 Future Enhancements

* Real-time Threat Monitoring
* Dynamic Malware Analysis Sandbox
* PDF Report Generation
* Scan History Management
* Role-Based Access Control
* Cloud Deployment
* Threat Intelligence Dashboard

---

## 👨‍💻 Author

**Rudranarayan Parida**

AI-Powered Malware Detection System

Cybersecurity | Machine Learning | Full Stack Development

---

## 📄 License

This project is developed for educational, research, and demonstration purposes.
