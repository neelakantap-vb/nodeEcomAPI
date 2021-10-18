const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
    name: String,
    slug: String,
    created_at: Date,
    updated_at: Date
});

const roleModal = mongoose.model("roles", roleSchema);

module.exports = roleModal;