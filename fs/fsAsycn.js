
const fs = require("fs");
const path = require("path");

const fileName = "fsAsycn.txt";
const filePath =path.join(__dirname,fileName);


fs.writeFile(filePath, "This is the initial Data", "utf-8",
    (err)=> {
        if (err) console.error(err);
        else console.log("file has been Saved");
        });


// fs.readFile(filePath, "utf-8",(err,data)=> {

//  if (err) console.error(err)
//  else console.log(data);
//  });




    
// fs.appendFile(filePath, "\n This is the updated Data", "utf-8",
//     (err)=> {
//         if (err) console.error(err);
//         else console.log("file has been updated");
//         });



// fs.unlink(filePath,  
//     (err)=> {
//         if (err) console.error(err);
//         else console.log("file has been deleted");
//         });