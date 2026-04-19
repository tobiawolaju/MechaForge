const express = require('express');
const app = express();

app.get('/', (req, res) => res.json({ message: 'Hello from MechaForge' }));

app.listen(3000, () => console.log('MechaForge running on :3000'));
