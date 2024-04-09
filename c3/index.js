require("./db/mongo-config"); // ke ja izvrsi funkcijata connect(), i ke ni se konektira do mongoDB
const express = require("express");
const app = express();
app.use(express.json()); // koga sakame da prakame podatoci vo json, mora da koristime express.json()

const {
    getAllUsers,
    getSortedByName,
    getUser,
    getUserByEmail,
    createUser,
    updateUser,
    removeUser
} = require("./controllers/user");

const {
    getAccounts,
    createAccount,
    updateAccount,
    removeAccount
} = require("./controllers/account");

app.get("/", (req, res) => {
    res.write("Ova ni e home page!");
    res.end();
});

app.get("/users", getAllUsers);
app.get("/users/sorted", getSortedByName);
app.get("/users/:id", getUser);
app.get("/users/email/:email", getUserByEmail);
app.post("/users", createUser);
app.put("/users/:id", updateUser);
app.delete("/users/:id", removeUser);

app.get("/accounts", getAccounts);
app.post("/accounts", createAccount);
app.put("/accounts/:id", updateAccount);
app.delete("/accounts/:id", removeAccount);

app.listen(8000, (err) => {
    console.log("Server started on 8000!");
    if(err){
        console.log(err);
    }
});