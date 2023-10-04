const mongoose = require("mongoose");

const postSchma = new mongoose.Schema({
  userID: { type: String, required: true, unique: true },
  profilePic: { type: String },
  location: { type: String },
  postLink: { type: Buffer },
  name: { type: String },
  likes: { type: String },
  isLiked: { type: Boolean },
  caption:{type:String},
  conments:{type:String},
  postID:{type:Number},
});

const Post = mongoose.model("Post",postSchma);
module.exports = Post;
