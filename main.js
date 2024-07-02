document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        addUserMessage(userInput);
        document.getElementById('user-input').value = '';
        getBotResponse(userInput);
    }
});

function addUserMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message user-message';
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addBotMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message bot-message';
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userInput) {
    let botMessage = "I'm sorry, I don't understand that.";
    if (userInput.toLowerCase().includes('hello')) {
        botMessage = 'Hello! How can I assist you today?';
    } else if (userInput.toLowerCase().includes('help')) {
        botMessage = 'Sure, what do you need help with?';
    } else if (userInput.toLowerCase().includes('price')) {
        botMessage = 'Our prices start at $19.99.';
    }
    addBotMessage(botMessage);
}
