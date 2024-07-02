document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    
    if (userInput.value.trim() !== "") {
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.textContent = userInput.value;
        chatBox.appendChild(userMessage);

        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.textContent = getBotResponse(userInput.value);
        chatBox.appendChild(botMessage);

        userInput.value = '';
        chatBox.scrollTop =
