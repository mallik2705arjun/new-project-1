const fs = require("fs");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath =path.join(__dirname,fileName);



// const file =__dirname;

// fs.promises

// .readdir(file)
// .then((data) => console.log(data))
// .catch((err) => console.error(err));



fs.promises

.writeFile(filePath, "this is the initial data", "utf-8")
.then(console.log("File created successfully!"))
.catch((err) => console.log(err));



// fs.promises

// .readFile(filePath, "utf-8")
// .then((data) => console.log(data))
// .catch((err) => console.log("error reading file:", err));



// fs.promises

// .appendFile(filePath, "\n this is the updated data", "utf-8")
// .then(console.log("File updated successfully!"))
// .catch((err) => console.log(err)); 

// fs.promises

// .unlink(filePath, "\n this is the deleted data", "utf-8")
// .then(console.log("File deleted successfully!"))
// .catch((err) => console.log(err)); 

