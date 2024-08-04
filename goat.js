document.getElementById('sendButton').addEventListener('click', handleUserInput);

const responses = [
    "maaaaa, Eid Mubarak",
    "Give me Ediiii",
    "Don't be frank, you are going to eat me.",
    "I am goat not a donkey",
    "I am being sacrified because that's my fate",
];

function handleUserInput() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === "") {
        return;
    }

    const response = getRandomResponse();
    displayResponse(response);
    speakResponse(response);
}

function getRandomResponse() {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

function displayResponse(response) {
    const responseElement = document.getElementById('response');
    responseElement.textContent = response;
}

function speakResponse(response) {
    const speech = new SpeechSynthesisUtterance(response);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
}
