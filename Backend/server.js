import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Productrouter from "./routes/product.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.json()); //To get the data in json format

app.use('/api/products', Productrouter);

app.listen(PORT, () => {
    connectDB();
    console.log("Server is ready at http://localhost:" + PORT);

})















//I7kq9HFz7EvAap4X