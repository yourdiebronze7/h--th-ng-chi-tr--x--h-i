const config = {
    DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/social_payment_system',
    SECRET_KEY: process.env.SECRET_KEY || 'super_secure_random_key!'
};

module.exports = config;