require("./db/mongo-config"); // ke ja izvrsi funkcijata connect(), i ke ni se konektira do mongoDB

const app = express();

app.use(express.json()); // koga sakame da prakame podatoci vo json, mora da koristime express.json()