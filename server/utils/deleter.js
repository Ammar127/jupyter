const fs = require("fs");
const path = require("path");
module.exports = name => {
  try {
    console.log("NAME => ", name);
    console.log(path.join(process.cwd(), name));
    const p = path.join(process.cwd(), name);
    fs.unlink(p, err => {
      console.log("Error while deleting", err);
    });
  } catch (e) {
    console.log("Error while deleting the file", e);
  }
};
