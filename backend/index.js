const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Route ตัวอย่าง
app.get('/', (req, res) => {
    res.send('Hello from Node.js Backend!');
});

// เริ่มต้น Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});