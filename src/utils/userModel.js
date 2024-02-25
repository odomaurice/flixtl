import mongoose from "mongoose";
// creating user schema
const user = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
  },
  { timestamps: true }
);

let userModel;

try {
  userModel = mongoose.model("User");
} catch (e) {
  userModel = mongoose.model("User", user);
}

export default userModel;
