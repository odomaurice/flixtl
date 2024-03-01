import mongoose from "mongoose";
import { dbConnect} from "../../../../lib/db";
import { User } from "../../../../lib/models";

// making a post request to the data base below
// this is register products
export async function POST(request) {
  // initiating the db connection below
  await dbConnect();
  const { username, email, password, img, isAdmin, isActive, phone, address } = await request.json();
 
  if (!username || !email || !password || !img || !isAdmin || !isActive || !phone || !address) {
    return new Response(
      JSON.stringify({ message: "bothing input are required" }),
      { status: 400, statusText: "failed to provide required inputs" }
    );
  }
  try {
    // creating new instance of a user
    const createUser = new User({ username, email, password, img, isAdmin, isActive, phone, address });
    // saving to the database
    const savedUser = await createUser.save();
    return new Response(JSON.stringify(savedUser), {
      status: 200,
      statusText: "successful",
    });
  } catch (error) {
    // handle any error below
  }
}

// making a get request to the database
// this will return all the registered users
export async function GET(request) {
  // creating new connection
  await dbConnect();
  try {
    const allUsers = await User.find();
    return new Response(JSON.stringify(allUsers), {
      status: 200,
      statusText: "successful",
    });
  } catch (error) {
    // handle any error below
  }
}