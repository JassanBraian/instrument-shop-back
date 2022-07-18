const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const instrumentRoutes = require('./routes/instrumentRoutes');

const cors = require('cors');
connectDB();
dotenv.config();

const app = express();
app.use(express.static(`${__dirname}/public`))
app.use(express.json({ limit: '10kb' }));

app.use(cors());
app.use('/api/v1/instrument', instrumentRoutes);

const port = process.env.PORT || 4500;

app.listen(port, () => {
    console.log(`Server running in ${port}`);
});