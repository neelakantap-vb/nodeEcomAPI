const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
    name: String,
    slug: String,
    created_at: Date,
    updated_at: Date
});

const tagModal = mongoose.model("tags", tagSchema);

module.exports = tagModal;