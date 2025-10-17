# Visioniyam

## Overview

Visioniyam is an innovative assistive technology solution designed to empower individuals with mobility impairments by enabling them to control computers using head movements and eye blinks. This comprehensive project combines cutting-edge computer vision technology with modern web development to create an accessible and user-friendly interface for computer control.

## 🚀 Features

### Core Functionality
- **Facial Landmark Detection**: Utilizes Google's MediaPipe to track 478 key facial landmarks in real-time
- **Head Movement Control**: Translate head movements into precise mouse cursor movements
- **Eye Blink Detection**: Left and right eye blinks trigger left and right mouse clicks
- **Real-time Calibration**: Customizable sensitivity settings for optimal user experience
- **Cross-platform Support**: Works on Windows, macOS, and Linux systems

### Web Application Features
- **Modern React Frontend**: Responsive web interface with dark/light theme support
- **User Authentication**: Secure signup/login system with JWT tokens
- **Interactive Documentation**: Step-by-step guides and tutorials
- **Download Management**: Easy access to desktop application downloads
- **Email Notifications**: Welcome emails and password reset functionality

### Desktop Application Features
- **Standalone Executable**: Cross-platform desktop application built with Python
- **Real-time Video Feed**: Live camera preview with facial landmark visualization
- **Calibration System**: Guided calibration process for optimal performance
- **Customizable Controls**: Adjustable sensitivity and movement thresholds

## 🏗️ Project Architecture

### Backend (Node.js/Express)
- **Framework**: Express.js with MongoDB integration
- **Authentication**: JWT-based authentication with bcrypt password hashing
- **Email Service**: Nodemailer integration for user communications
- **Database**: MongoDB with Mongoose ODM
- **Security**: CORS enabled, input validation, and secure cookie handling

### Frontend (React.js)
- **Framework**: React 18 with React Router for navigation
- **Styling**: Tailwind CSS with custom CSS modules
- **Animations**: Framer Motion for smooth UI transitions
- **Components**: Modular component architecture with reusable UI elements
- **State Management**: React hooks for state management

### Desktop Application (Python)
- **Computer Vision**: OpenCV and MediaPipe for facial landmark detection
- **GUI**: Tkinter for desktop interface
- **Mouse Control**: PyAutoGUI for system-level mouse control
- **Build System**: cx_Freeze for creating standalone executables

## 📁 Project Structure

```
visioniyam/
├── backend/                 # Node.js backend server
│   ├── controllers/        # Route controllers (auth, views)
│   ├── models/             # Database models (User)
│   ├── routes/             # API routes (users, views)
│   ├── utils/              # Utility functions (email, error handling)
│   ├── views/              # Email templates (Pug)
│   └── configuration/      # Database connection
├── frontend/               # React.js web application
│   ├── src/
│   │   ├── component/      # React components
│   │   ├── CSS/           # Stylesheets
│   │   ├── images/        # Static assets
│   │   └── animation/     # Lottie animations
│   └── public/            # Public assets
├── python/                 # Desktop application
│   ├── main.py            # Main application logic
│   └── setup.py           # Build configuration
└── README.md              # Project documentation
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- Python 3.8+
- MongoDB
- Webcam/camera access

### Backend Setup
```bash
cd backend
npm install
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

### Desktop Application Setup
```bash
cd python
pip install -r requirements.txt
python main.py
```

## 🎯 Usage

### Web Application
1. Visit the live application at https://visioniyam.vercel.app/
2. Create an account or sign in
3. Download the desktop application
4. Follow the setup instructions

### Desktop Application
1. Launch the Visioniyam desktop application
2. Click "Calibrate" to set up your facial landmarks
3. Follow the on-screen calibration instructions
4. Click "Start Capturing" to begin mouse control
5. Use head movements to move the cursor
6. Blink left eye for left-click, right eye for right-click

## 🔧 Technical Implementation

### Facial Landmark Detection
- **MediaPipe Integration**: Real-time facial landmark tracking
- **Landmark Mapping**: 478 key points mapped to facial features
- **Movement Translation**: Distance calculations converted to mouse movements
- **Blink Detection**: Eye landmark distance analysis for click detection

### Mouse Control Algorithm
- **Head Movement**: Horizontal and vertical head movements mapped to cursor position
- **Sensitivity Adjustment**: Customizable movement thresholds
- **Click Detection**: Eye blink duration analysis for click events
- **Smooth Movement**: Interpolated cursor movements for natural feel

## 🌐 Deployment

### Web Application
- **Frontend**: Deployed on Vercel
- **Backend**: Node.js server with MongoDB Atlas
- **Domain**: https://visioniyam.vercel.app/

### Desktop Application
- **Build System**: cx_Freeze for cross-platform executables
- **Distribution**: Direct download from web application
- **Updates**: Version management through web interface

## 🤝 Contributing

We welcome contributions to improve Visioniyam! Please feel free to:
- Report bugs and issues
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Team

Visioniyam was created by **Team Kirmada**:
- **Shaurya Bansal** - Full Stack Development
- **Karan Manglani** - Computer Vision & AI
- **Arun Rathaur** - Backend Development

## 🎯 Mission

Our mission is to bridge the digital divide by making technology accessible to everyone, regardless of physical limitations. Visioniyam represents a step forward in inclusive technology, empowering users to interact with computers through natural facial movements and expressions.

## 📞 Support

For support, questions, or feedback, please contact us through the web application or create an issue in this repository.

---

**Visioniyam** - Empowering accessibility through innovation 🚀


