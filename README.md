# AI-Assisted Telemedicine Kiosk

## Project Overview

### Introduction

The **AI-Assisted Telemedicine Kiosk** aims to provide healthcare assistance to people in rural areas where medical services are hard to access. The kiosk offers offline medical support, multilingual communication, first-aid guidance through 3D videos, and disease prediction using AI. Additionally, it enables users to connect with doctors remotely for consultations.

By leveraging technology, we make healthcare more accessible, addressing challenges like language barriers, remote locations, and limited internet access.

---

## Features and Technical Details

### 1. **Disease Prediction**

- **Feature Description**: Users can input their symptoms, and the kiosk uses AI to predict possible diseases based on the information provided.

- **Technical Approach**:  
  The disease prediction is powered by a machine learning model that analyzes input symptoms and compares them to a vast database of medical conditions.
  
- **Technologies Used**:  
  - **Machine Learning**: Scikit-learn, TensorFlow  
  - **Algorithms**: Decision Trees, Random Forest Classifier, Support Vector Machines (SVM)
  - **Dataset**: Medical dataset containing symptoms and diseases for training the model.

---

### **Figure 3: Disease Prediction Interface**

![Disease Prediction](image_link_here)  
*Caption: The disease prediction feature uses AI to provide possible diagnoses based on user symptoms.*

---

### 2. **Connect to Doctors**

- **Feature Description**: The kiosk allows users to connect to doctors for remote consultations, helping those in rural areas who do not have easy access to healthcare professionals.
  
- **Technical Approach**:  
  Users can search for doctors and connect to them via video calls for consultations. The system uses an online doctor directory and integrates video conferencing capabilities.
  
- **Technologies Used**:  
  - **Video Calling**: WebRTC, Twilio API  
  - **Doctor Search**: Firebase, Algolia Search

---

### **Figure 4: Connect to Doctors**

![Connect to Doctors](image_link_here)  
*Caption: Users can search for doctors and initiate video consultations through the kiosk interface.*

---

### 3. **3D First-Aid Guidance**

- **Feature Description**: The kiosk provides 3D video tutorials for first-aid procedures, helping users with emergency situations by visually guiding them step by step.

- **Technical Approach**:  
  The 3D videos are integrated into the kiosk interface. When the user selects an emergency, they are shown detailed 3D animations explaining how to provide first aid.
  
- **Technologies Used**:  
  - **3D Video Rendering**: Unity 3D  
  - **Video Integration**: HTML5, CSS, JavaScript

---

### **Figure 5: 3D First-Aid Video**

![3D First Aid Video](image_link_here)  
*Caption: 3D video demonstrating emergency first-aid procedures.*

---

### 4. **Offline Accessibility**

- **Feature Description**: The kiosk can provide medical support even in areas without internet connectivity. It stores essential medical information locally, enabling offline access to guidance.
  
- **Technical Approach**:  
  The application is designed to function without the internet, relying on a local database for medical content and guidance.

---

### **Figure 6: Offline Medical Assistance**

![Offline Assistance](image_link_here)  
*Caption: Offline medical guidance available even without internet access.*

---

### 5. **Multilingual Support**

- **Feature Description**: The kiosk supports multiple languages, ensuring that people from different linguistic backgrounds can use it effectively.
  
- **Technical Approach**:  
  We integrated a multilingual API to detect the user’s preferred language and translate the interface and guidance into that language.
  
- **Technologies Used**:  
  - **Language Detection**: Google Cloud Translation API  
  - **Translation**: Custom-built language models for seamless communication.

---

### **Figure 7: Multilingual Interface**

![Multilingual Support](image_link_here)  
*Caption: The kiosk's interface supports multiple languages for user accessibility.*

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

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
