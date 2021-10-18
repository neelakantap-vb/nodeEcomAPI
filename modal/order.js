const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user_id: String,
    total_items: Number,
    products: [
        {
            product: String,
            quantity: Number
        }
    ],
    billing_address: String,
    shipping_address: String,
    transaction_status: {
        type: String,
        enum: ["confirmed", "pending", "rejected"]
    },
    payment_mode: {
        type: String,
        enum : ["credit card", "debit card", "UPI", "cash", "net banking"]
    },
    payment_status: {
        type: String,
        enum: ["success", "pending", "failed"]
    },
    order_status: {
        type: String,
        enum: ["ordered", "pending", "dispatched", "delivered", "cancled"]
    },
    created_at: Date,
    updated_at: Date
});

const orderModal = mongoose.model("orders", orderSchema);

module.exports = orderModal;