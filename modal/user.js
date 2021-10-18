const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    profile_image: String,
    role: String,
    password: String,
    created_at: Date,
    updated_at: Date
});

const userModal = mongoose.model("users", userSchema);

module.exports = userModal;