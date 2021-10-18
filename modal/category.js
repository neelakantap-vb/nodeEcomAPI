const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: String,
    slug: String,
    image: String,
    description: String,
    created_at: Date,
    updated_at: Date
});

const categoryModal = mongoose.model("categories", categorySchema);

module.exports = categoryModal;