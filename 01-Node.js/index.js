// This is use create a file add a greeting message inside it
const fs = require("fs");
fs.writeFile("message.txt", "Hello from Alpha!", "utf8", (err) => {
  if (err) throw err;
  console.log("Completed!");
});

// This is use to read a file
fs.readFile("./alpha.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
