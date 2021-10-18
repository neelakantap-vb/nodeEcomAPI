const orderModal = require("../modal/order");

const storeOrder = async (req, res) => {
    try {
        const total_items = req.body.products.reduce((accumulator, current) => accumulator + current.quantity, 0);
        const order = await new orderModal(
            {...req.body, total_items: total_items, created_at: new Date(), updated_at: new Date()}
        );
        order.save();

        res.status(201).send(order);
    } catch (error) {
        
    }
};

const getOrders = async (req, res) => {
    try {
        const orders = await orderModal.find({});
        const items = orders.map(order => ["_id: "+order._id, "user_id: "+order.user_id, "order_status: "+order.order_status]);
        res.status(200).send(items);
    } catch (error) {
        
    }
};

const getOrderDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const order = await orderModal.find({_id : id});
        res.status(201).send(order);
    } catch (error) {
        
    }
};

const updateOrder = async (req, res) => {
    try {
        if(req.body.products){
            var total_items = req.body.products.reduce((accumulator, current) => accumulator + current.quantity, 0);
        }
        const updatedOrder = await orderModal.findOneAndUpdate(
            { _id  : req.params.id},
            req.body.products?
            { ...req.body, total_items: total_items, updated_at: new Date() }:
            { ...req.body, updated_at: new Date() },
            { new: true }
        );
        await updatedOrder.save();
        res.status(200).send(updatedOrder);
    } catch (error) {
        
    }
};

const deleteOrder = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedOrder = await orderModal.findOneAndDelete({_id : id});
        res.status(200).send("Deleted the order: \n"+deletedOrder);
    } catch (error) {
        
    }
};

module.exports = {
    storeOrder,
    getOrders,
    getOrderDetails,
    updateOrder,
    deleteOrder
};