const userModal = require("../modal/user");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const storeUser = async (req, res) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, saltRounds);
        const user = await new userModal({...req.body, password: hash, created_at: new Date(), updated_at: new Date()});
        user.save();

        res.status(201).send(user);
    } catch (error) {
        
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await userModal.find({});
        const names = users.map(user => ["_id: "+user._id, "name: "+user.first_name+ " "+ user.last_name]);
        res.status(200).send(names);
    } catch (error) {
        
    }
};

const getUserDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userModal.find({_id : id});
        res.status(201).send(user);
    } catch (error) {
        
    }
};

const updateUser = async (req, res) => {
    try {
        const updatedUser = await userModal.findOneAndUpdate(
            { _id  : req.params.id},
            { ...req.body, updated_at: new Date() },
            { new: true }
        );
        await updatedUser.save();
        res.status(200).send(updatedUser);
    } catch (error) {
        
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedUser = await userModal.findOneAndDelete({ _id: id});
        res.status(200).send("Deleted user: \n"+deletedUser);
    } catch (error) {
        
    }
};

const login = async(req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await userModal.find({email : email});
        if(user.length){
            if(await bcrypt.compareSync(password, user[0].password)){
                res.status(200).send("Welcome: "+user[0].first_name);
            }
            else{
                res.status(401).send("Incorrect credentials");
            }
        }
    } catch (error) {
        
    }
};

const logout = async(req, res) => {
    try {
        res.status(200).send("Logged out successfully!");
    } catch (error) {
        
    }
};

module.exports = {
    storeUser,
    getUsers,
    getUserDetails,
    updateUser,
    deleteUser,
    login,
    logout
};