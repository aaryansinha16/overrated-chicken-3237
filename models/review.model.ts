import { Schema , model, models } from "mongoose";


const reviewSchema = new Schema({
    content : {type: String, required : true},
    rating : {type: Number, default: 1},
    date:{type:String},
    userId : { type : Schema.Types.ObjectId, ref:"user"},
    productId : { type : Schema.Types.ObjectId, ref:"product"}
})

const reviewModel = models.review || model( "review" , reviewSchema );

export default reviewModel
