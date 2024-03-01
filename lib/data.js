import { User } from "./models";
import { dbConnect } from "./db";

export const fetchUsers = async () => {
  try{
    dbConnect();
    const users = await User.find()
    return users

  } catch(err) {
    console.log(err)
    throw new Error("Failed to fetch users");

  }
}

export const cards = [
    {
      id: 1,
      title: "Total Users",
      number: 10.928,
      change: 12,
    },
    {
      id: 2,
      title: "Stock",
      number: 8.236,
      change: -2,
    },
    {
      id: 3,
      title: "Revenue",
      number: 6.642,
      change: 18,
    },
  ];