import mongoose from "mongoose";

const db = async () => {
  try{

  await mongoose.connect("mongodb://localhost:27017/");
  console.log('db connected')

  }catch(error){

    console.log('db connection failed :',error)

  }

}
export default db;
