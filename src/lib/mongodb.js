// lib/mongodb.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

export async function connectToDatabase() {

  const mongo = mongoose.connect(MONGODB_URI).then(()=>{
    console.log("mongodb connected")
  }).catch((err)=>{
    console.log("error", err)
  })
  
  return mongo;
}
