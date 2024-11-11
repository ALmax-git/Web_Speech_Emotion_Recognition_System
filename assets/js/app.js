let emotionDisplay = document.getElementById('emotionDisplay');
        let analyser, dataArray;
        let audioContext = new (window.AudioContext || window.webkitAudioContext)();
        let microphone, source;

        // Start Audio Context and request microphone access
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                microphone = stream;
                source = audioContext.createMediaStreamSource(stream);
                analyser = audioContext.createAnalyser();
                analyser.fftSize = 2048;
                let bufferLength = analyser.frequencyBinCount;
                dataArray = new Uint8Array(bufferLength);
                source.connect(analyser);

                // Start analyzing every 2 seconds
                setInterval(analyzeEmotion, 2000); // Analyze every 5 seconds
            })
            .catch(error => {
                console.error('Error accessing microphone:', error);
            });

        function analyzeEmotion() {
            analyser.getByteTimeDomainData(dataArray);
            analyser.getByteFrequencyData(dataArray);

            // Calculate the average amplitude (loudness) of the signal
            let amplitude = 0;
            let frequency = 0;
            for (let i = 0; i < dataArray.length; i++) {
                amplitude += Math.abs(dataArray[i] - 128); // Normalize and sum the amplitude
            }
            amplitude /= dataArray.length;

            // Calculate the dominant frequency (pitch)
            const freqData = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(freqData);
            for (let i = 0; i < freqData.length; i++) {
                frequency += freqData[i];
            }
            frequency /= freqData.length;

            // Emotion Detection Logic Based on Amplitude (Loudness) and Frequency (Pitch)
            if (amplitude > 150) { // High amplitude implies louder sound
                if (frequency > 180) {
                    emotionDisplay.textContent = "Anger";  // High pitch and loud = Anger
                } else if (frequency < 100) {
                    emotionDisplay.textContent = "Fear";  // Low pitch and loud = Fear
                } else {
                    emotionDisplay.textContent = "Excitement";  // High amplitude with normal pitch
                }
            } else if (amplitude < 80) { // Low amplitude implies softer sound
                if (frequency < 100) {
                    emotionDisplay.textContent = "Sadness";  // Low pitch and soft = Sadness
                } else if (frequency > 180) {
                    emotionDisplay.textContent = "Surprise";  // High pitch, soft = Surprise
                } else {
                    emotionDisplay.textContent = "Contentment";  // Soft sound, normal pitch = Contentment
                }
            } else {
                if (frequency < 100) {
                    emotionDisplay.textContent = "Guilt";  // Low pitch, moderate amplitude = Guilt
                } else if (frequency > 150 && frequency < 200) {
                    emotionDisplay.textContent = "Happiness";  // High pitch, moderate volume = Happiness
                } else {
                    emotionDisplay.textContent = "Disgust";  // Unusual frequencies in middle range = Disgust
                }
            }
        }
