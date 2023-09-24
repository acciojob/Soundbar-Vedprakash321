// Get references to the buttons and the audio element
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
const audio = document.getElementById('audio');

// Add click event listeners to the buttons
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the sound file name from the data-sound attribute
        const soundFile = this.getAttribute('data-sound');
        
        // Set the audio source to the selected sound file
        audio.src = `sounds/${soundFile}`;

        // Play the audio
        audio.play();
    });
});

// Add click event listener to the stop button
stopButton.addEventListener('click', function() {
    // Pause and reset the audio
    audio.pause();
    audio.currentTime = 0;
});
