const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static('public'));

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log('received: %s', message);
        const userMessage = message.toLowerCase();

        let botMessage = "I'm sorry, I don't understand that.";
        if (userMessage.includes('hello')) {
            botMessage = 'Hello! How can I assist you today?';
        } else if (userMessage.includes('help')) {
            botMessage = 'Sure, what do you need help with?';
        } else if (userMessage.includes('price')) {
            botMessage = 'Our prices start at $19.99.';
        }

        ws.send(botMessage);
    });

    ws.send('Hi there! How can I help you today?');
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
