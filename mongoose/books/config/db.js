import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/bookstore";

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("MongoDB connected successfully !!");
  } catch (err) {
    console.log("Mongodb Connection failed ! ", err);
  }
};

export default connectDB;

// how to handle exceptions in js -> using try and catch block
// try...catch... -
// try{
//     // expected error code...
// }catch(err){
//     // err -> which error comes
// }
