import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI || "mongodb://0.0.0.0:27017/sooft";

const MongoDBConection = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default MongoDBConection;
