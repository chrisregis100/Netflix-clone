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
      origin: [
        "https://backend-pink-six.vercel.app", // Front-end déployé
        "http://localhost:5173", // Pour le développement local
    ],
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
      optionsSuccessStatus:200,
    })
  );

  app.use("/api", UserRouter);

  app.get("/", (req, res) => {
    res.send("Hello World");
  });

app.listen(port, ()=>console.log(`le server  a demarré au port ${port}`)
)
