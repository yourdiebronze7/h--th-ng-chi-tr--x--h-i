const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const paymentRoutes = require('./routes/paymentRoutes');
const config = require('./config');

const app = express();

mongoose.connect(config.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to the database successfully'))
    .catch(err => console.error('Unable to connect to the database', err));

app.use(bodyParser.json());
app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});