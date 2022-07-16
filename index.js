const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const instrumentRoutes = require('./routes/instrumentRoutes');

connectDB();
dotenv.config();

const app = express();

app.use(express.json({ limit: '10kb' }));

app.use('/api/v1/instrument', instrumentRoutes);

const port = process.env.PORT || 4500;

app.listen(port, () => {
    console.log(`Server running in ${port}`);
});