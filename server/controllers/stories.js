import mongoose from "mongoose";
import Story from "../models/storyContent.js";
const getStories=async(req,res)=>{
   const story=await Story.find();
   console.log(story) 
   try {
    res.status(200).json(story);
    
   } catch (error) {
    
    res.status(404).json({message:error.message})
   }
}

const createStory = async(req,res)=>{
    const body=req.body;
    const newStory=new Story({
        ...body
    });
    try {
        await newStory.save();
        res.status(201).json(newStory);
        
    } catch (error) {
        console.log("Caught an error in POST createstory")
        res.status(409).json({message:error.message})
        
    }
}

export {getStories,createStory}