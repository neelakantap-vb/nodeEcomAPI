const productModal = require("../modal/product");

const storeProduct = async (req, res) => {
    try {
        const product = await new productModal({...req.body, created_at: new Date(), updated_at: new Date()});
        product.save();

        res.status(201).send(product);
    } catch (error) {
        
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await productModal.find({});
        const items = products.map(product => ["_id: "+product._id, "name: "+product.name, "sell_price: "+product.sell_price]);
        res.status(200).send(items);
    } catch (error) {
        
    }
};

const getProductDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await productModal.find({_id : id});
        res.status(201).send(product);
    } catch (error) {
        
    }
};

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await productModal.findOneAndUpdate(
            { _id  : req.params.id},
            { ...req.body, updated_at: new Date() },
            { new: true }
        );
        await updatedProduct.save();
        res.status(200).send(updatedProduct);
    } catch (error) {
        
    }
};

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedProduct = await productModal.findOneAndDelete({_id : id});
        res.status(200).send("Deleted the product: \n"+deletedProduct);
    } catch (error) {
        
    }
};

module.exports = {
    storeProduct,
    getProducts,
    getProductDetails,
    updateProduct,
    deleteProduct
};