import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URL).then(() => {
      console.log("db connected successfully");
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
