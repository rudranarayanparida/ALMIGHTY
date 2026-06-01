# 🛡️ ALMIGHTY: AI-Powered Malware Detection System

An intelligent malware detection platform that combines **Machine Learning-based static analysis** with **VirusTotal threat intelligence** to identify malicious files and provide real-time security insights through an interactive web dashboard.

---

## 🚀 Features

- 🔐 JWT-Based Authentication (Login & Registration)
- 📂 Secure File Upload & Analysis
- 🤖 AI-Powered Malware Detection using EMBER + LightGBM
- 🌐 VirusTotal API Integration for Threat Verification
- 📊 Interactive Dashboard with Real-Time Statistics
- 📈 Malware Distribution Visualizations
- 👤 User Authentication & Access Control
- 🗄️ MySQL Database Integration
- 🎨 Modern Angular Frontend UI
- 🔒 Protected Routes using Angular Guards

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
 ├── JWT Authentication
 ├── File Upload API
 ├── Dashboard API
 ├── AI Prediction Engine
 └── VirusTotal Integration
 │
 ▼
MySQL Database

AI Engine
 ├── EMBER Feature Extraction
 └── LightGBM Malware Classification
```

---

## 🛠️ Tech Stack

### Frontend
- Angular 20
- TypeScript
- HTML5
- CSS3
- Angular Router
- HttpClient
- Chart.js
- ng2-charts
- ngx-toastr

### Backend
- Django
- Django REST Framework
- Simple JWT
- MySQL
- Python

### Artificial Intelligence
- EMBER Dataset Features
- LightGBM Classifier
- NumPy
- Pandas
- Scikit-Learn

### Threat Intelligence
- VirusTotal API

---

# 📂 Project Structure

```text
ALMIGHTY
│
├── backend
│   ├── backend
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   │
│   ├── malwareapp
│   │   ├── views.py
│   │   ├── models.py
│   │   ├── ai_model.py
│   │   ├── virustotal.py
│   │   └── feature_extractor.py
│   │
│   ├── manage.py
│   └── model.pkl
│
├── frontend
│   └── src
│       └── app
│           ├── Login
│           ├── Dashboard
│           ├── Upload
│           ├── Home
│           ├── Layout
│           └── Services
│
└── README.md
```

---

# 🤖 AI Malware Detection Workflow

### 1️⃣ File Upload

User uploads an executable or document file from the Angular frontend.

### 2️⃣ Feature Extraction

The backend extracts malware-related static features using EMBER feature extraction techniques.

### 3️⃣ AI Classification

Extracted features are passed to the trained LightGBM model.

The model predicts:

- Malicious
- Benign
- Unknown

### 4️⃣ VirusTotal Verification

The file hash is submitted to VirusTotal API.

VirusTotal performs multi-engine scanning and returns:

- Malicious
- Benign
- Suspicious

### 5️⃣ Final Result

Results from:

- AI Model
- VirusTotal

are displayed together in the frontend dashboard.

---

# 🧠 How EMBER + LightGBM Works

### EMBER

EMBER (Endgame Malware Benchmark for Research) is a malware dataset containing thousands of PE files.

It extracts:

- Header Information
- Import Tables
- Export Tables
- Section Metadata
- Byte Histograms
- Entropy Features

These numerical features represent the behavior and structure of executable files.

### LightGBM

LightGBM is a Gradient Boosting Machine algorithm optimized for speed and accuracy.

The extracted EMBER features are provided to the trained LightGBM model:

```python
prediction = model.predict(features)
```

The model classifies the uploaded file as:

- Malicious
- Benign

with a confidence score.

---

# 🔄 Application Workflow

```text
Login/Register
       │
       ▼
 Authentication
       │
       ▼
 Dashboard Access
       │
       ▼
 Upload File
       │
       ▼
 AI Analysis
       │
       ▼
 VirusTotal Scan
       │
       ▼
 Store Result
       │
       ▼
 Display Result
       │
       ▼
 Update Dashboard
```

---

# ⚙️ Installation

## Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

Backend runs at:

```text
http://127.0.0.1:8000
```

---

## Frontend Setup

```bash
cd frontend

npm install

ng serve
```

Frontend runs at:

```text
http://localhost:4200
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend directory:

```env
VIRUSTOTAL_API_KEY=your_api_key_here
SECRET_KEY=your_django_secret_key
```

Never commit API keys or secrets to GitHub.

---

# 📊 Dashboard Analytics

The dashboard displays:

- Total Files Scanned
- Malicious Files Count
- Benign Files Count
- Malware Distribution Pie Chart
- Analysis Summary Bar Chart

---

# 🔒 Security Features

- JWT Authentication
- Route Protection using Angular Guards
- Protected API Endpoints
- Token-Based Authorization
- Secure File Upload Handling

---

# 📸 Screenshots

### Login Page

Modern JWT-based authentication interface.

### Upload & Scan

Upload files and perform AI + VirusTotal scanning.

### Dashboard

Interactive analytics dashboard with charts and malware statistics.

---

# 🎯 Future Enhancements

- Real-Time Threat Monitoring
- Deep Learning Malware Detection
- PDF Report Generation
- Threat Intelligence Feed Integration
- User Activity Logs
- Role-Based Access Control

---

# 👨‍💻 Author

**Rudranarayan Parida**

B.Tech CSE (Cybersecurity)

AI-Powered Malware Detection System Project

---

# ⭐ Support

If you found this project useful, consider giving it a star on GitHub.
