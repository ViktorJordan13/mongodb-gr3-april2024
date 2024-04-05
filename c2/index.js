//MERN 
// M - MongoDB
// E - Express
// R - React.js
// N - Node.js

//Object Relational Mapping(ORM) - in relational databases 
const mongoose = require("mongoose");
// Mongoose is an Object-Document Mapping(ODM) library for MongoDB and Node.js
// Key features:
// 1. Schema definition - ni ovozmozuva da napravime semi za nasite podatoci
// Mozeme da gi definirame polinjata, nivnite tipovi, pravila za validacija, default vrednosti itn...
// 2. Model creation - stom definirame sema, moze da kreirame i model koristejki go Mongoose
// Model - toa e konstruktor sto se sovpaga (interacts) so specificna MongoDB kolekcija
// vo zavisnost od definirana sema
// 3. Data validation - ako podatocite ne odgovaraat na toa sto e definirano vo semata ili vo modelot,
// da ne ni dozvoli vnes odnosno bilo kakva promena na istite

const User = require("./user");
const UserValidate = require("./user");

mongoose
    .connect(
        "mongodb+srv://viktorj560:1234@mongodb-g3.evm2fxk.mongodb.net/users?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected!"));

async function addNewUser() {
    //POST baranje
    //req.body.name i req.body.age
    const user = new User({ name: "Example", age: 20}); // ovie podatoci ke ni stignat or req.body
    await user.save();
}

//addNewUser();

async function getOneUser(){
    //GET baranje
    const foundUser = await User.findOne({
        name: "Test Semos",
        age: 100
    });

    console.log("User found!", foundUser);
}

//getOneUser();

//Primer za insertiranje dokument sto odgovara na semata i pravilata za validacija

async function addValidUser(){

    const validUser = new UserValidate({
        name: "Anja",
        age: 20,
        email: "anja@semos.com"
    });

    await validUser.save();
}

//addValidUser();

//Primer za insertiranje dokument sto ne odgovara na semata i pravilata za validacija

async function addInvalidUser(){
    const invalidUser = new UserValidate({
        age: 50
    })

    await invalidUser.save()
       
}

//addInvalidUser();

