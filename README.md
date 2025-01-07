# AI-Assisted Telemedicine Kiosk

## Overview

The **AI-Assisted Telemedicine Kiosk** is an innovative solution designed to bring healthcare services to rural areas where access to medical professionals and resources is limited. The kiosk offers offline medical support, multilingual communication, first-aid guidance through 3D videos, disease prediction, and the ability to connect to doctors remotely.

---
### **Figure 1: Interface**

![Disease Prediction](![image](https://github.com/user-attachments/assets/4f813ff9-2056-49db-b421-6c0c01f835f9))

*Caption: The disease prediction feature analyzes user-input symptoms and suggests possible diagnoses.*
## Features and Technical Details




### 1. **Connect to Doctors**

- **Feature Description**: This feature enables users to search for doctors and connect with them via video calls. It ensures that rural populations have access to consultations with healthcare professionals without having to travel long distances.

- **Working**:  
  - **Doctor Search**: Users can search for doctors by specialization using a simple interface.
  - **Video Consultation**: Once a doctor is found, users can connect for a real-time consultation via integrated video call functionality (WebRTC, Twilio).
  - **Offline Mode**: Even in areas with limited connectivity, users can browse a directory of available doctors.

- **Technologies Used**:
  - **Video Calling**: WebRTC, Twilio API
  - **Search Engine**: Firebase, Algolia Search

---

### **Figure 1: Connect to Doctors**

![Connect to Doctors](![image](https://github.com/user-attachments/assets/4f070552-2bac-4438-8982-c38b0eb1e3df)
)  
*Caption: Search and initiate video consultations with doctors through the kiosk.*


---
### 1. **Disease Prediction**

- **Feature Description**: The disease prediction feature allows users to input their symptoms, and the kiosk, using AI and machine learning algorithms, predicts possible diseases based on the symptoms provided.

- **Working**:  
  - **User Interaction**: Users describe their symptoms via a simple interface.
  - **Machine Learning**: The kiosk uses a trained model (TensorFlow, Scikit-learn) to compare the symptoms against a large medical dataset.
  - **Prediction**: Based on the symptoms, the kiosk displays a list of probable diseases along with suggested next steps.

- **Technologies Used**:
  - **Machine Learning**: TensorFlow, Scikit-learn
  - **Dataset**: A medical dataset with diseases and symptoms for model training
  - **Algorithms**: Decision Trees, Random Forest Classifier, Support Vector Machines (SVM)

---

### **Figure 1: Disease Prediction Interface**

![Disease Prediction](image_link_here)  
*Caption: The disease prediction feature analyzes user-input symptoms and suggests possible diagnoses.*

---


### 3. **3D First-Aid Guidance**

- **Feature Description**: The kiosk offers 3D visualizations of first-aid procedures. Users can select the type of emergency and watch step-by-step guidance on how to handle the situation effectively.

- **Working**:  
  - **3D Videos**: The kiosk displays animated 3D videos demonstrating the first-aid procedure.
  - **Interactive Interface**: Users can interact with the system to choose the type of emergency and view relevant instructions.
  - **Real-Time Assistance**: Immediate guidance during emergency situations, providing accurate, visual instructions for first-aid.

- **Technologies Used**:
  - **3D Video Rendering**: Unity 3D
  - **Web Integration**: HTML5, CSS3, JavaScript for embedding 3D content into the kiosk interface.

---

### **Figure 3: 3D First-Aid Video**

![3D First-Aid Video](image_link_here)  
*Caption: The kiosk provides 3D first-aid videos to help users respond to emergencies effectively.*

---

### 4. **Multilingual Support**

- **Feature Description**: The kiosk supports multiple languages, ensuring accessibility to users from various linguistic backgrounds. This feature eliminates the language barrier and makes healthcare services more inclusive.

- **Working**:  
  - **Language Detection**: The kiosk detects the user’s language and switches the interface to their preferred language.
  - **Translation**: All medical information, guidance, and communication are translated into the selected language in real-time.

- **Technologies Used**:
  - **Language Detection**: Google Cloud Translation API
  - **Real-Time Translation**: Custom-built models for seamless language translation and user communication.

---

### **Figure 4: Multilingual Interface**

![Multilingual Support](image_link_here)  
*Caption: The kiosk interface supports multiple languages for better accessibility.*

---

### 5. **Offline Accessibility**

- **Feature Description**: The kiosk is designed to function in areas with no internet access. It stores essential medical data and first-aid content locally, ensuring users can still receive medical assistance without an internet connection.

- **Working**:  
  - **Local Storage**: All the critical medical data, videos, and first-aid guides are stored locally on the device.
  - **Offline Mode**: The system operates fully offline, providing users with vital health support even in remote areas with no network coverage.

- **Technologies Used**:
  - **Database**: MongoDB (local storage)
  - **Offline Mode**: Electron.js to build the desktop app that can run offline

---

### **Figure 5: Offline Assistance**

![Offline Assistance](image_link_here)  
*Caption: Offline mode allows users to access medical content without an internet connection.*

---

## Frameworks and Libraries Used

- **Backend**:  
  - Node.js, Express.js for API handling and server-side logic.
  - MongoDB for local data storage (medical content, user data, etc.).
  
- **Frontend**:  
  - React.js for building the interactive user interface.
  - HTML5, CSS3 for styling and embedding multimedia content.
  
- **Machine Learning**:  
  - TensorFlow for disease prediction model training and inference.
  - Scikit-learn for additional machine learning algorithms.

- **3D Content**:  
  - Unity 3D for rendering first-aid videos.
  - Three.js for 3D rendering on web-based interfaces.

- **Communication**:  
  - WebRTC and Twilio API for real-time video consultations.

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

## Contributing

Feel free to contribute to this project by forking the repository and submitting a pull request. Any improvements or bug fixes are welcome!


