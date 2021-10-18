const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    thumbnail: String,
    product_gallery: [],
    description: String,
    base_price: Number,
    sell_price: Number,
    category_name: String,
    tags: [],
    additional_information: String,
    created_at: Date,
    updated_at: Date
});

const productModal = mongoose.model("products", productSchema);

module.exports = productModal;