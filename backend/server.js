const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/price', (req, res) => {
    res.json({ price: 49.99 }); // Indha data thaan website-la theriyum
});

app.listen(3000, () => {
    console.log('Backend running on port 3000');
});