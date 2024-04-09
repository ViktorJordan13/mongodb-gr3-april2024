//I semite i crud funkcionalnostite ke gi stavime vo models za ovaa aplikacija

const mongoose = require ("mongoose");


//Schemas
const adressSchema = mongoose.Schema({
    street: String,
    city: String,
});

const userSchema = mongoose.Schema({
    //ObjectId e unikatno i e random generirano za sekoe entry
    name: String,
    age: Number,
    email: String,
    createdAt: {
        type: Date,
        immutable: true, //ni ovozmozuva da ne go promenime poleto createdAt pri update ili druga operacija
        default: () => Date.now() // ja zema momentalnata data(data kako vreme)
    }, //date in the moment of creation
    updatedAt: {
        type: Date,
        default: () => Date.now()
    }, //date in the moment of updating
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
    },
    hobbies: [String],
    address: adressSchema,
});

const User = mongoose.model("User", userSchema, "user");

//CRUD functionalities for MongoDB

const findUsers = async() => {
    return await User.find({});
};

const create = async(data) => {
    //req.body
    const user = new User(data);
    return await user.save();
};

const update = async (id, data) => {
    // const newData = {
    //     name: "Viktor new user";
    // }
    return await User.updateOne({_id: id}, data);
};

const remove = async (id) => {

    return await User.deleteOne({_id: id});
}

const getAllSortedByName = async() => {
    return await User.find({}).sort({ name: 1});
}

const getById = async (id) => {
    return await User.findOne({_id: id});
}

const getByEmail = async (email) => {
    return await User.findOne ({email: email})
}

module.exports = {
    findUsers,
    getAllSortedByName,
    getById,
    getByEmail,
    create,
    update,
    remove
};