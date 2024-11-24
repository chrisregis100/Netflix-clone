/* eslint-disable no-undef */
 
const express = require('express');
const connectDB = require("./config/connectDB")
const dotenv = require("dotenv");
const cors= require("cors");
const UserRouter = require("./src/routes/UserRoute");


const port = 5000

dotenv.config()

connectDB();

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
      optionsSuccessStatus:200,
    })
  );
app.use("/api", UserRouter);

app.listen(port, ()=>console.log(`le server  a demarré au port ${port}`)
)