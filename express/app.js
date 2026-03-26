import express from "express";
// import { PORT } from "./env.js";

const app = express();
//  console.log(__dirname);
//    console.log(__filename);

app.get("/",(req,res) => {
// console.log(import.meta.url);
const __filename =new URL(import.meta.url);
console.log(__filename);

   res.send("hii");
});

app.listen(PORT, () => {
    console.log("server starting on port 3000");
});