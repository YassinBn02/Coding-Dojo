import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from "./routes/Book.routes.js"
const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api",router)

dbConnect();



app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);