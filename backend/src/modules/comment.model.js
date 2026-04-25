import mongoose from "mongoose";

const commentShema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", 
    },

    post: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Post",
    },

    content: {
      type: String,
      required: true,
    },

    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
    ],
  },
  { timestamps: true }
)

const Comment = mongoose.model("Comment", commentShema);
export default Comment