const categoryModal = require("../modal/category");

const storeCategory = async (req, res) => {
    try {
        const slug = req.body.name.toLowerCase().trim().replace(/ /g, '-');
        const category = await new categoryModal(
            {...req.body, slug: slug, created_at: new Date(), updated_at: new Date()}
        );
        category.save();

        res.status(201).send(category);
    } catch (error) {
        
    }
};

const getCategories = async (req, res) => {
    try {
        const categories = await categoryModal.find({});
        const items = categories.map(category => ["_id: "+category._id, "name: "+category.name]);
        res.status(200).send(items);
    } catch (error) {
        
    }
};

const getCategoryDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await categoryModal.find({_id : id});
        res.status(201).send(category);
    } catch (error) {
        
    }
};

const updateCategory = async (req, res) => {
    try {
        if(req.body.name){
            var slug = req.body.name.toLowerCase().trim().replace(/ /g, '-');
        }
        const updatedCategory = await categoryModal.findOneAndUpdate(
            { _id  : req.params.id},
            req.body.name?
            { ...req.body, slug: slug, updated_at: new Date() }:
            { ...req.body, updated_at: new Date() },
            { new: true }
        );
        await updatedCategory.save();
        res.status(200).send(updatedCategory);
    } catch (error) {
        
    }
};

const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedCategory = await categoryModal.findOneAndDelete({_id : id});
        res.status(200).send("Deleted the category: \n"+deletedCategory);
    } catch (error) {
        
    }
};

module.exports = {
    storeCategory,
    getCategories,
    getCategoryDetails,
    updateCategory,
    deleteCategory
};