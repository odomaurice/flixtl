import mongoose from "mongoose";
import { dbConnection } from "@/utils/dbconnection";

export async function GET(request) {
  console.log("entered");
  await dbConnection();
  return new Response(JSON.stringify({ message: "hello world" }));
}
