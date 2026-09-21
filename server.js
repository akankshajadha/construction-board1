const express = require('express');
const cors = require('cors');
const path = require('path'); // <-- CHANGE 1: Add this helper built into Node.js
const app = express();
const PORT = 3000;

app.use(cors());

// <-- CHANGE 2: Add this line to automatically serve your HTML & CSS files 
// Make sure your index.html and style.css are in the same folder as this server script!
app.use(express.static(__dirname));

app.get('/api/pollution', (req, res) => {
    const constructionData = {
        temperature: (20 + Math.random() * 15).toFixed(1), 
        humidity: Math.floor(40 + Math.random() * 30),     
        pm25: Math.floor(10 + Math.random() * 40),         
        pm10: Math.floor(20 + Math.random() * 60)          
    };

    res.json(constructionData);
});

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});
