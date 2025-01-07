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
    
### ![WhatsApp Image 2025-01-07 at 10 39 31_55bf1ba0](https://github.com/user-attachments/assets/827c6320-88c2-4912-9cf0-e53280d8458e)

---



### ![WhatsApp Image 2025-01-07 at 10 40 30_f68413fc](https://github.com/user-attachments/assets/6a8909ca-e818-412c-ae02-5ef62ebb2ba5)
### ![WhatsApp Image 2025-01-07 at 10 41 52_6fa9c9b5](https://github.com/user-attachments/assets/1bd384dc-df8f-48c4-af3f-90b090250aac)


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
    
### ![WhatsApp Image 2025-01-07 at 10 43 20_8af3c235](https://github.com/user-attachments/assets/07148dc1-85bb-4f2a-9869-2aaa69999359)

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

### ![WhatsApp Image 2025-01-07 at 10 39 59_0d689ae5](https://github.com/user-attachments/assets/91fe9746-0677-4916-b8d9-fd968d9157a8)
 
<p align="center">Figure 3. Disease Prediction Interface</p>

---

### 4. **Real-Time News Updates**

- **Feature Description**:  
  Users can receive real-time health-related news updates, including information on outbreaks, health tips, and urgent medical advisories.

- **Working**:  
  - **News Integration**: The system fetches news from reliable health sources and displays real-time updates on the screen.
  - **User Notifications**: Important alerts are pushed to users to keep them informed about critical health events

---

### ![WhatsApp Image 2025-01-07 at 10 43 20_8af3c235](https://github.com/user-attachments/assets/f9b904e0-fcef-4a8d-8dbb-6c7e95202c36)

<p align="center">Figure 4. Real-Time Health News</p>

---

### 5. **Real-Time Voice Chatbot**

- **Feature Description**:  
  The voice chatbot is designed to assist users with common health queries, offering voice-based interactions for a more intuitive experience.

- **Working**:  
  - **Voice Interaction**: Users speak to the chatbot, which responds in real time, providing assistance on health-related topics.
  - **AI Assistance**: The system uses Natural Language Processing (NLP) to understand and respond to health inquiries.


---



### 6. **Multilingual Support**

- **Feature Description**:  
  The kiosk supports multiple languages, allowing users to interact with the system in their preferred language. This feature eliminates language barriers, making healthcare more accessible to people from different regions.

- **Working**:  
  - **Language Detection**: The kiosk automatically detects and switches to the user’s preferred language.
  - **Translation**: All medical content is displayed in the selected language for user ease.
 
---
### ![WhatsApp Image 2025-01-07 at 10 45 41_2fdd4520](https://github.com/user-attachments/assets/dba8bcb0-a8ad-43bd-975d-42c4acfeb1dd)
 ![WhatsApp Image 2025-01-07 at 10 46 45_c0ecf4f0](https://github.com/user-attachments/assets/227d4233-5684-43f6-a459-2be86e90d6cc)

<p align="center">Figure 5. Real-Time Translation</p>

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


