import mongoose from "mongoose";


const cardsSchema = new mongoose.Schema({
    name:String,
    imgURL:String
});

export default mongoose.model("card",cardsSchema);