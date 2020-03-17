const bcrypt = require("bcryptjs");
const fieldValidation = require("../utils/field-validator");
const User = require("../models/User");
const deleter = require("../utils/deleter");
const util = require("util");
const responseHandler = require("../utils/response-handler");
const config    = require('../config');

const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const JWT = require('jsonwebtoken');




async function createUser(req,res) {
  try {
    console.log(req.body);
   
     
    const hash = await createBcrypt(req.body.password)
    let myUser = {
      name: req.body.name,
      email: req.body.email,
      role: req.body.role? req.body.role: 'user',
      password: hash
  };
  return  await new User(myUser).save();

  } catch (error) {
    console.log(error);
    responseHandler(res,500,{msg:'Error in Creating User'})
  }

}
async function signup(req, res, next) {

  try {
    if (!fieldValidation(req, res)) return;
  let newuser = await createUser(req,res);
    console.log(newuser)
    if (newuser) {
      responseHandler(res, 200,  newuser );
    }
  }
   catch(e) {
    console.error(e);
    responseHandler(res, 500, { msg: 'User Not created' });

   }


}
async function signIn(req, res) {
try {
  console.log('user', req.user)
   if(req.user) {
    // Generate token
    console.log('in token')

    const token = signToken(req.user);
    res.cookie('access_token', token, {
      httpOnly: true
    });
    responseHandler(res, 200, {  user: req.user, token: token });

  }
} catch (error) {
  console.error(error);
  responseHandler(res, 500, { msg: 'Error While Signin,Email or Password Error' });
}

}

signToken = user => {
  return JWT.sign({
    iss: 'CodeWorkr',
    sub: user._id,
    iat: new Date().getTime(), // current time
    exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
  }, config.JWT_SECRET);
}

const createBcrypt = async password => {
  const genSalt = util.promisify(bcrypt.genSalt);
  const genHash = util.promisify(bcrypt.hash);
  const salt = await genSalt(10);
  return genHash(password, salt);
};

const comparePassword = (password, hash) => {
  return bcrypt.compare(password, hash);
};

module.exports = {

  signup,
  signIn,
 
};


