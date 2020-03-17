const User = require("../models/User");
module.exports = function uniqueUsername() {
  try {
    proposedName = 'MD' + Math.floor((Math.random() * 100) + 1);
    return generateUniqueUserName(proposedName); 
  } catch (e) {
    console.log("Error while creating Unique UserName", e);
  }
}

function generateUniqueUserName(proposedName) {
    return User
      .findOne({username: proposedName})
      .then(function(account) {
        if (account) {
          console.log('no can do try again: ' + proposedName);
          proposedName = 'MD' + Math.floor((Math.random() * 100) + 1);
          return generateUniqueUserName(proposedName); // <== return statement here
        }
        console.log('proposed name is unique' + proposedName);
        return proposedName;
      })
      .catch(function(err) {
        console.error(err);
        throw err;
      });
  }