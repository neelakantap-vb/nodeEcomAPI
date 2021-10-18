const roleModal = require("../modal/role");

const storeRole = async (req, res) => {
    try {
        const slug = req.body.name.toLowerCase().trim().replace(/ /g, '-');
        const role = await new roleModal(
            {...req.body, slug: slug, created_at: new Date(), updated_at: new Date()}
        );
        role.save();

        res.status(201).send(role);
    } catch (error) {
        
    }
};

const getRoles = async (req, res) => {
    try {
        const roles = await roleModal.find({});
        const items = roles.map(role => ["_id: "+role._id, "name: "+role.name]);
        res.status(200).send(items);
    } catch (error) {
        
    }
};

const getRoleDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const role = await roleModal.find({_id : id});
        res.status(201).send(role);
    } catch (error) {
        
    }
};

const updateRole = async (req, res) => {
    try {
        if(req.body.name){
            var slug = req.body.name.toLowerCase().trim().replace(/ /g, '-');
        }
        const updatedRole = await roleModal.findOneAndUpdate(
            { _id  : req.params.id},
            req.body.name?
            { ...req.body, slug: slug, updated_at: new Date() }:
            { ...req.body, updated_at: new Date() },
            { new: true }
        );
        await updatedRole.save();
        res.status(200).send(updatedRole);
    } catch (error) {
        
    }
};

const deleteRole = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedRole = await roleModal.findOneAndDelete({_id : id});
        res.status(200).send("Deleted the role: \n"+deletedRole);
    } catch (error) {
        
    }
};

module.exports = {
    storeRole,
    getRoles,
    getRoleDetails,
    updateRole,
    deleteRole
};