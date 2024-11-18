const express = require('express');
const app = express();
const PORT = 5000;

// Replace these mock values with the actual logic to fetch data from the ESP8266
const mockData = {
    humidity: '55',
    temperature: '22',
    moisture: 'Optimal',
    valve: '1'
};

// Define each endpoint
app.get('/humidity', (req, res) => {
    res.send(mockData.humidity);
});

app.get('/temperature', (req, res) => {
    res.send(mockData.temperature);
});

app.get('/moisture', (req, res) => {
    res.send(mockData.moisture);
});

app.get('/valve', (req, res) => {
    res.send(mockData.valve);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
