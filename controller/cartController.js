const cartModal = require("../modal/cart");

const storeCart = async (req, res) => {
    try {
        const total_price = req.body.sell_price * req.body.product_qty;
        const cart = await new cartModal(
            {...req.body, total_price: total_price, created_at: new Date(), updated_at: new Date()}
        );
        cart.save();

        res.status(201).send(cart);
    } catch (error) {
        
    }
};

const getCarts = async (req, res) => {
    try {
        const carts = await cartModal.find({});
        const items = carts.map(cart => ["_id: "+cart._id, "user: "+cart.user, "total_pice: "+cart.total_price]);
        res.status(200).send(items);
    } catch (error) {
        
    }
};

const getCartDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const cart = await cartModal.find({_id : id});
        res.status(201).send(cart);
    } catch (error) {
        
    }
};

const updateCart = async (req, res) => {
    try {
        if(req.body.sell_price || req.body.product_qty){
            const data = await cartModal.find({_id: req.params.id});
            var total_price = req.body.sell_price || data[0].sell_price * req.body.product_qty || data[0].product_qty;
        }
        const updatedCart = await cartModal.findOneAndUpdate(
            { _id  : req.params.id},
            req.body.sell_price || req.body.product_qty?
            { ...req.body, total_price: total_price, updated_at: new Date() }:
            { ...req.body, updated_at: new Date() },
            { new: true }
        );
        await updatedCart.save();
        res.status(200).send(updatedCart);
    } catch (error) {
        
    }
};

const deleteCart = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedCart = await cartModal.findOneAndDelete({_id : id});
        res.status(200).send("Deleted the cart: \n"+deletedCart);
    } catch (error) {
        
    }
};

module.exports = {
    storeCart,
    getCarts,
    getCartDetails,
    updateCart,
    deleteCart
};