const Post = require("../models/Post");
const mongoose = require("mongoose");

const getAllPosts = (req, res) => {
  Post.find({})
    .then((posts) => {
      if (!posts) {
        return res.status(404).json({ message: "No post found" });
      }
      return res.status(200).json(posts);
    })
    .catch((error) => {
      console.error("Error fetching posts", error);
      return res.status(500).json({ message: "Internal server error" });
    });
};

const createPost = async (req,res) =>{
    console.log("body",req.body);

    try {
        const {userID, profilePic,location,name,likes,isLiked,caption,conments,postID} = req.body;
        const postLink = req.files.postLink.data;
        const newPost = new Post ({
            userID, profilePic, location, postLink, name, likes, isLiked, caption, conments,postID
        })

        await newPost.save();
        res.status[201].json({message:"Post created successfully", post:newPost});
    } catch (error) {
        console.error("Error fetching posts", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {getAllPosts, createPost};