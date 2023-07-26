import mongoose from "mongoose";
const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    await mongoose.connect(uri, options);
    console.log("Connected to the dataBase");
  } catch (error) {
    console.error("Error while Connecting");
    throw error;
  }
};
export default connectDB;
