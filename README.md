# Web_Speech_Emotion_Recognition_System - Emotion Detection

**Web_Speech_Emotion_Recognition_System** is a web-based application designed to detect and predict emotions based on real-time microphone input. The application analyzes audio characteristics such as loudness (amplitude) and pitch (frequency) to infer emotions like happiness, sadness, anger, surprise, fear, and more. It uses simple audio signal processing techniques and is built with HTML, JavaScript, and CSS.

## Features

- **Emotion Detection**: The app detects emotions like Happiness, Sadness, Anger, Surprise, Fear, and others based on audio characteristics such as amplitude and frequency.
- **Real-Time Analysis**: The microphone continuously records audio, and the application analyzes the data in intervals of 5 seconds.
- **Interactive UI**: Displays detected emotions in real-time with a preloader animation while the app initializes.
- **Browser Support**: The application works directly in modern browsers without needing additional plugins.

## Technologies Used

- **HTML**: Structure and content of the web page.
- **CSS**: Styling and layout (with custom animations for preloader).
- **JavaScript**: Audio processing and emotion detection using the Web Audio API.
- **Web Audio API**: Used to capture and analyze microphone input.

## Installation

### Prerequisites

Make sure you have the following installed:

- A modern web browser (Chrome, Firefox, etc.).
- An active internet connection for microphone access.

### Steps to Run the Application Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ALmax-git/Web_Speech_Emotion_Recognition_System.git
   cd Web_Speech_Emotion_Recognition_System
   ```

2. **Open the `index.html` file**:
   Simply open the `index.html` file in your web browser of choice to run the application.

## How It Works

1. **Microphone Access**: When the app is loaded, it prompts the user for permission to access the microphone.
2. **Audio Processing**: It uses the Web Audio API to analyze the audio data from the microphone in real-time. The app captures both the amplitude (loudness) and frequency (pitch) of the audio signal.
3. **Emotion Analysis**: Every 5 seconds, the app evaluates the audio signal and determines the most likely emotion, which is displayed on the screen.
4. **Emotion Display**: The app updates the screen with the detected emotion, such as "Happiness", "Sadness", "Fear", etc.

## Emotion Categories Detected

The app currently detects the following emotions based on the audio characteristics:

- **Excited**
- **Calm**
- **Happiness**
- **Sadness**
- **Fear**
- **Anger**
- **Surprise**
- **Disgust**
- **Contentment**
- **Guilt**
- **Shame**

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request. We welcome any suggestions, improvements, or bug fixes!

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **Web Audio API**: For enabling real-time audio analysis in the browser.
- **JavaScript and HTML5**: For powering the interactive web application.
- The **open-source community** for providing resources and documentation.

## Contact

For any inquiries or support, you can reach me at:

- **Email**: [ALmax](mailto:alimustaphashettima@gmail.com)
- **GitHub**: [https://github.com/ALmax-git](https://github.com/ALmax-git)

---

Thank you for using **Web_Speech_Emotion_Recognition_System**! Enjoy the emotional detection experience.
```

### Explanation of Sections:

- **Introduction**: Briefly describes the purpose of the project and its main features.
- **Technologies Used**: Lists the technologies that power the app.
- **Installation**: Provides a guide for setting up the app locally.
- **How It Works**: Explains how the app works from microphone access to emotion analysis.
- **Emotion Categories Detected**: Lists all the emotions that the app can detect.
- **Contributing**: Instructions for anyone who wants to contribute to the project.
- **License**: Mentions that the project is licensed under the MIT License.
- **Acknowledgements**: Credits the tools and resources used in the project.
- **Contact**: Provides contact details for support or inquiries.

