import mongoose from "mongoose";
import { dbConnect, disconnect } from "../../../../lib/db";
import { Product } from "../../../../lib/models";

// making a post request to the data base below
// this is register products
export async function POST(request) {
  // initiating the db connection below
  await dbConnect();
  const { title, desc, price, stock, img, color, size } = await request.json();
 
  if (!title || !desc || !price || !stock || !img || !color || !size) {
    return new Response(
      JSON.stringify({ message: "bothing input are required" }),
      { status: 400, statusText: "failed to provide required inputs" }
    );
  }
  try {
    // creating new instance of a product
    const createProduct = new Product({ title, desc, price, stock, img, color, size });
    // saving to the database
    const savedProduct = await createProduct.save();
    return new Response(JSON.stringify(savedProduct), {
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
    const allProducts = await Product.find();
    return new Response(JSON.stringify(allProducts), {
      status: 200,
      statusText: "successful",
    });
  } catch (error) {
    // handle any error below
  }
}