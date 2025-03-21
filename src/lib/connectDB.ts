import mongoose from "mongoose";

export default async function ConnectDB() {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MongoDb Uri is not valid");
    }
    await mongoose.connect(uri);
    console.log("Connect to DB successful");
  } catch (error) {
    console.log("connect fail");
    console.log(error);
  }
}
