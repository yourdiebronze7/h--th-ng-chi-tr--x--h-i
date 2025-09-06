const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const paymentRoutes = require('./routes/paymentRoutes');
const config = require('./config');

const app = express();

mongoose.connect(config.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Kết nối tới cơ sở dữ liệu thành công'))
    .catch(err => console.error('Không thể kết nối tới cơ sở dữ liệu', err));

app.use(bodyParser.json());
app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server đang chạy trên http://localhost:${PORT}`);
});
