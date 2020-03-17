const multer = require("multer");
const path = require("path");
const filePath = path.join(process.cwd(), "public", "products");

// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, path.join(process.cwd(), "server/public", "products"));
//   },
//   filename: function(req, file, cb) {
//     console.log("File name is !!", file);
//     cb(null, Date.now() + "-" + file.originalname);
//   }
// });

// function fileFilter(req, file, cb) {
//   // The function should call `cb` with a boolean
//   // to indicate if the file should be accepted

//   // To reject this file pass `false`, like so:
//   //   cb(null, false);

//   // To accept the file pass `true`, like so:
//   cb(null, true);

//   // You can always pass an error if something goes wrong:
//   //   cb(new Error("I don't have a clue!"));
//   console.log("Hello filtering the Product image");
// }
// var storage = multer.diskStorage({
//   // destination
//   destination: function (req, file, cb) {
//     console.log('destination',file)
//     cb(null, path.join(process.cwd(), "server/public", "products"));
//   },
//   filename: function (req, file, cb) {
//     console.log('filename',file)

//     cb(null, file.originalname+Date.now());
//   }
// });
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(process.cwd(), "server/public", "products"));
    console.log('--->', file)
  },
  filename: function(req, file, cb) {
    console.log("File name is !!", file);
    cb(null, Date.now() + "-" + file.originalname);
  }
});
function fileFilter (req, file, cb) {
 
  // The function should call `cb` with a boolean
  // to indicate if the file should be accepted
  console.log('rejected files', file)
  // To reject this file pass `false`, like so:
  // cb(null, false)
  console.log('acepted files', file)
 
  // To accept the file pass `true`, like so:
  cb(null, true)

  // You can always pass an error if something goes wrong:
  // cb(new Error('I don\'t have a clue!'))
 
}
module.exports = multer({ storage: storage }, fileFilter);
