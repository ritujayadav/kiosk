# AI-Assisted Telemedicine Kiosk

## Overview

The **AI-Assisted Telemedicine Kiosk** is a comprehensive healthcare solution designed to bridge the gap between remote healthcare access and rural populations. This kiosk offers medical support with features like real-time consultations with doctors, 3D first-aid guidance, disease prediction, real-time news updates, multilingual support, and a voice-based chatbot for better user interaction.

---

## Features and Technical Details

### 1. **Connect to Doctors**

- **Feature Description**:  
  This feature allows users to search for doctors based on specialization and book appointments for online consultations. Users can directly connect with healthcare professionals without the need to travel.

- **Working**:  
  - **Search for Doctors**: The system allows users to search for doctors by specialty (e.g., general practitioner, cardiologist, etc.).
  - **Book Appointments**: Users can book an appointment with available doctors in real time through the kiosk interface.

- **Technologies Used**:  
  - **Backend**: Node.js, Express.js  
  - **Search Engine**: Firebase, Algolia Search  
  - **Real-time Updates**: Firebase for real-time notifications

---

### ![Connect to Doctors](image_link_here)  
<p align="center">Figure 1. Search and Book Doctor Appointments</p>

---

### 2. **3D First-Aid Guidance**

- **Feature Description**:  
  The kiosk provides 3D visual guidance for first-aid procedures, helping users take immediate actions in medical emergencies by showing step-by-step instructions through animated 3D videos.

- **Working**:  
  - **Interactive Interface**: Users select the type of emergency, and the kiosk displays relevant 3D videos to guide them.
  - **Real-Time Assistance**: Immediate first-aid guidance is available during emergencies.

- **Technologies Used**:  
  - **3D Video Rendering**: Unity 3D  
  - **Web Integration**: HTML5, CSS3, JavaScript for embedding 3D content

---

### ![3D First-Aid Video](image_link_here)  
<p align="center">Figure 2. 3D First-Aid Guidance</p>

---

### 3. **Disease Prediction**

- **Feature Description**:  
  This feature allows users to input symptoms and get an AI-based disease prediction along with possible causes and recommended treatments.

- **Working**:  
  - **Symptom Input**: Users describe their symptoms via an easy-to-use interface.
  - **Disease Prediction**: Based on the input, the system uses machine learning to predict potential diseases.

- **Technologies Used**:  
  - **Machine Learning**: TensorFlow, Scikit-learn  
  - **Dataset**: Medical datasets for disease-symptom matching

---

### ![Disease Prediction](image_link_here)  
<p align="center">Figure 3. Disease Prediction Interface</p>

---

### 4. **Real-Time News Updates**

- **Feature Description**:  
  Users can receive real-time health-related news updates, including information on outbreaks, health tips, and urgent medical advisories.

- **Working**:  
  - **News Integration**: The system fetches news from reliable health sources and displays real-time updates on the screen.
  - **User Notifications**: Important alerts are pushed to users to keep them informed about critical health events.

- **Technologies Used**:  
  - **API Integration**: News APIs for fetching health news  
  - **Real-time Updates**: WebSockets for live news updates

---

### ![Real-Time News Updates](image_link_here)  
<p align="center">Figure 4. Real-Time Health News</p>

---

### 5. **Real-Time Voice Chatbot**

- **Feature Description**:  
  The voice chatbot is designed to assist users with common health queries, offering voice-based interactions for a more intuitive experience.

- **Working**:  
  - **Voice Interaction**: Users speak to the chatbot, which responds in real time, providing assistance on health-related topics.
  - **AI Assistance**: The system uses Natural Language Processing (NLP) to understand and respond to health inquiries.

- **Technologies Used**:  
  - **Voice Recognition**: Google Speech API, Web Speech API  
  - **AI Chatbot**: Dialogflow, Rasa NLU for chatbot intelligence

---

### ![Real-Time Voice Chatbot](image_link_here)  
<p align="center">Figure 5. Real-Time Voice Chatbot</p>

---

### 6. **Multilingual Support**

- **Feature Description**:  
  The kiosk supports multiple languages, allowing users to interact with the system in their preferred language. This feature eliminates language barriers, making healthcare more accessible to people from different regions.

- **Working**:  
  - **Language Detection**: The kiosk automatically detects and switches to the user’s preferred language.
  - **Translation**: All medical content is displayed in the selected language for user ease.

- **Technologies Used**:  
  - **Google Cloud Translation API** for language detection and real-time translation

---

## Frameworks and Libraries Used

- **Backend**:  
  - Node.js, Express.js for API handling and server-side logic  
  - Firebase for real-time data syncing and notifications

- **Frontend**:  
  - React.js for building the user interface  
  - HTML5, CSS3 for styling and embedding 3D and multimedia content

- **Machine Learning**:  
  - TensorFlow for disease prediction model  
  - Scikit-learn for additional machine learning algorithms

- **3D Content**:  
  - Unity 3D for rendering first-aid videos and emergency procedures  
  - Three.js for 3D rendering on web interfaces

- **Communication**:  
  - WebRTC and Twilio API for real-time video consultations  
  - Google Speech API for voice recognition

---

## How to Run the Project Locally

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/yourusername/telemedicine-kiosk.git
    ```

2. Navigate to the project directory:

    ```bash
    cd telemedicine-kiosk
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the application:

    ```bash
    npm start
    ```

5. Open your browser and visit `http://localhost:3000` to view the project.

---


