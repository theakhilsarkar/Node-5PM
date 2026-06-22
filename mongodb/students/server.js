import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const dbname = "student-db";
const client = new MongoClient(url);

const connectDB = async () => {
  await client.connect(); // its connect server with mongodb
  console.log("MongoDB Connected successfully !!");
  return client.db(dbname); // create database and return db object
};

// database - collection -> document -> key-value

const addStudent = async () => {
  const db = await connectDB();
  const result = await db.collection("all-students").insertOne({
    name: "Vishal More",
    course: "MERN Stack Development",
    age: 19,
    // result: 78.69,
  });
  console.log("student added successfully ! ", result);
};

const getStudents = async () => {
  const db = await connectDB();
  const result = await db.collection("all-students").find().toArray();
  console.log("student fetched successfully ! ", result);
};

const updateStudent = async () => {
  const db = await connectDB();
  const result = await db.collection("all-students").updateOne(
    { _id: "6a33d0594fa586b7a6774168" },
    {
      $set: {
        course: "MERN Stack",
      },
    },
  );
  console.log("student updated successfully ! ", result);
};

// addStudent();
// getStudents();
updateStudent();
