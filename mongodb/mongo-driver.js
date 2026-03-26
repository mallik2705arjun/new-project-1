import {MongoClient} from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1");
await client.connect();

const db = client.db("mongodb_nodejs_db");
const userCollection = db.collection("users");

// userCollection.insertOne({ name: "vinod techncial",age: 31});

// userCollection.insertMany([
//     {name: "techncial", role:"user", age:31},
//     {name: "thapa", role:"user", age:31}, 
//     {name: "bagadur", role:"user", age:31}

// ]);

// const usersCursor =userCollection.find();
// console.log(usersCursor);

// for await (const user of usersCursor) {
//     console.log(usersCursor);
// }

const user = await userCollection.findOne({ name: "vinod thapa"});
console.log(user);
