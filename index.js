const fs = require("fs");
const path = require("path");

const readDir = async (dir) => {
  fs.readdir(path.join(__dirname, dir), (err, files) => {
    if (err) {
      console.log(err);
    }
    console.log(files);
  });
};

readDir("markdowns");
