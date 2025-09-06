const Payment = require('../models/Payment');

exports.createPayment = async (req, res) => {
    const { amount, recipient } = req.body;
    try {
        const payment = new Payment({ amount, recipient });
        await payment.save();
        res.status(201).send(payment);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find();
        res.send(payments);
    } catch (error) {
        res.status(500).send(error);
    }
};
