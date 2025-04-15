console.log("index.js running...");
const texts = [
    "Web Developer",
    "C, C++ & Java",
    "Python & DSA",
];
let textIndex = 0;
const typingTextElement = document.querySelector('#animated-skills');

// Function to trigger the typing animation
function displayText() {
    typingTextElement.style.width = '0'; // Reset width to trigger the animation again
    typingTextElement.textContent = texts[textIndex]; // Set the text to show
    typingTextElement.style.animation = 'none'; // Remove any ongoing animation
    typingTextElement.style.animation = 'typing 2s steps(25) infinite alternate';
}

// Function to loop through the texts
function startTypingAnimation() {
    displayText();
    textIndex = (textIndex + 1) % texts.length; // Go to next text, loop back if at end
    setTimeout(startTypingAnimation, 4000); // Wait 4 seconds before starting next text
}

window.onload = function() {
    startTypingAnimation(); // Typing Animation

    // Introduction text
    const text1 = document.querySelector('main #profile #text1');
    const text2 = document.querySelector('main #profile #text2');
    setTimeout(() => {
        text1.classList.add('show');
        setTimeout(() => {
            text2.classList.add('show');
        }, 1500);
    }, 500);
};
