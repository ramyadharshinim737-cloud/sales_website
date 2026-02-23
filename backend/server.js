const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const products = [
    { id: 1, name: "Smart Watch", price: 49.99, img: "⌚" },
    { id: 2, name: "Headphones", price: 29.99, img: "🎧" },
    { id: 3, name: "iPhone 15 Pro", price: 999.00, img: "📱" },
    { id: 4, name: "Gaming Laptop", price: 1200.00, img: "💻" },
    { id: 5, name: "Wireless Mouse", price: 25.00, img: "🖱️" },
    { id: 6, name: "Mechanical Keyboard", price: 85.00, img: "⌨️" },
    { id: 7, name: "DSLR Camera", price: 550.00, img: "📷" },
    { id: 8, name: "iPad Air", price: 599.00, img: "📟" },
    { id: 9, name: "Bluetooth Speaker", price: 45.00, img: "🔊" },
    { id: 10, name: "Gaming Monitor", price: 300.00, img: "🖥️" }
];

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(3000, () => console.log('Backend running on port 3000'));