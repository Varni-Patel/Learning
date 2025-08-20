const fs = require("fs");

fs.writeFile("message.txt", "Trying to see if both of them work together", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 

fs.readFile("/VARNI/Udemy/Projects/2.2 Native Modules/message.txt",  'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 