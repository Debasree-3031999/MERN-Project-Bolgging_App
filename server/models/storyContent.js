import mongoose from "mongoose";

const storySchema = mongoose.Schema({
    caption: {type:String, required:true},

    username: {type:String, required:true},

    userId: {type:String, required:true},

    image: {type:String, required:true},
    
    likes: {type:Number, default:0},

    postDate: {type:Date, default: new Date()},
    tags:String,

});

export default mongoose.model("Story",storySchema);