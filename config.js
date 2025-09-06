const config = {
    DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/social_payment_system',
    SECRET_KEY: process.env.SECRET_KEY || 'your_secret_key'
};

module.exports = config;
