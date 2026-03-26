
const fs = require("fs");
const path = require("path");

const fileName = "text.txt";
const filePath =path.join(__dirname,fileName);


// console.log(__dirname);


// const writeFile = fs.writeFileSync(
//   fileName,
//   " This is the initial Data ",
//   "utf-8",
// );

//  console.log(writeFile);



// const readFile = fs.readFileSync(filePath, "utf-8");
// console.log(readFile);


// const appendFile = fs.appendFileSync(
//   fileName,
//   "\n This is the updated Data ",
//   "utf-8",
// );

// console.log(appendFile);

// const fileDelete = fs.unlinkSync(filePath)
// console.log(fileDelete);

const newUpdatedFileName = "updateTest.txt";
const newFilePath = path.join(__dirname, newUpdatedFileName);
const renameFile = fs.renameSync(filePath,newFilePath);
console.log(renameFile);