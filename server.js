import * as dotenv from 'dotenv'; 
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import cors from "cors";

//App Config
const app = express();
const port = process.env.port || 8001;
const password = process.env.PASSWORD;
const connection_url= "mongodb+srv://admin:"+password+"@cluster0.fidxvpz.mongodb.net/tinderDB?retryWrites=true&w=majority"

//Middleware
app.use(express.json());
app.use(cors());


//DB config
mongoose.connect(connection_url, {useUnifiedTopology: true})

//API Endpoints
app.get("/",(req,res)=> res.status(200).send("Hi Please visit FrontEnd site https://www.google.com"));


app.post("/tinder/cards",(req,res) =>{
    const dbCard = req.body;
    Cards.create(dbCard,(err,data) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
});

app.get("/tinder/cards",(req,res) =>{
   Cards.find((err,data) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
});

//Listener
app.listen(port,() => console.log(`listening on localhost: ${port}`));

