const mongoose = require("mongoose");

const adressSchema = mongoose.Schema({
    street: String,
    city: String,
});

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
    },
    hobbies: [String],
    address: adressSchema,
});

module.exports = mongoose.model("User", userSchema, "user");

//Primer za validacija na vneseni podatoci sprema semata sto sme ja napravile:
const userSchemaValidate = mongoose.Schema({
    name: {
        type: String,
        required: true, //field is required,
    },
    age: {
        type: Number,
        min: 0,
        max: 120
    }
})

module.exports = mongoose.model("UserValidate", userSchemaValidate, "validUsers");



