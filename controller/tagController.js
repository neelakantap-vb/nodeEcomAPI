const tagModal = require("../modal/tag");

const storeTag = async (req, res) => {
    try {
        const slug = req.body.name.toLowerCase().trim().replace(/ /g, '-');
        const tag = await new tagModal(
            {...req.body, slug: slug, created_at: new Date(), updated_at: new Date()}
        );
        tag.save();

        res.status(201).send(tag);
    } catch (error) {
        
    }
};

const getTags = async (req, res) => {
    try {
        const tags = await tagModal.find({});
        const items = tags.map(tag => ["_id: "+tag._id, "name: "+tag.name]);
        res.status(200).send(items);
    } catch (error) {
        
    }
};

const getTagDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const tag = await tagModal.find({_id : id});
        res.status(201).send(tag);
    } catch (error) {
        
    }
};

const updateTag = async (req, res) => {
    try {
        if(req.body.name){
            var slug = req.body.name.toLowerCase().trim().replace(/ /g, '-');
        }
        const updatedTag = await tagModal.findOneAndUpdate(
            { _id  : req.params.id},
            req.body.name?
            { ...req.body, slug: slug, updated_at: new Date() }:
            { ...req.body, updated_at: new Date() },
            { new: true }
        );
        await updatedTag.save();
        res.status(200).send(updatedTag);
    } catch (error) {
        
    }
};

const deleteTag = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedTag = await tagModal.findOneAndDelete({_id : id});
        res.status(200).send("Deleted the tag: \n"+deletedTag);
    } catch (error) {
        
    }
};

module.exports = {
    storeTag,
    getTags,
    getTagDetails,
    updateTag,
    deleteTag
};