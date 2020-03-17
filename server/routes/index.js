var controllers = require("./../controllers");
const resp = require("../utils/response-handler");
const multy = require("../custom-middlewares/multy");
const productMulter = require("../custom-middlewares/productMulter");
const responseHandler = require("../utils/response-handler");
const User = require("../models/User");

const passport = require('passport');
const passportSignIn = passport.authenticate('local', { session: false } );
const passportJWT = passport.authenticate('jwt', { session: false });
module.exports = function (app) {

  
    //ping
    app.get('/api/ping',(req, res, next) => {
      res.send('Api is Working ....');
    });
    app.use(passport.initialize());
    require('../custom-middlewares/passport');

    //signup
    app.post("/api/signup",controllers.users.signup);
    app.post('/api/signin', passportSignIn, controllers.users.signIn);

    // app.post('/api/product', passportJWT,productMulter.any(), controllers.product.create);
    // app.put('/api/product/:id', passportJWT, productMulter.any(), controllers.product.update);
    // app.get('/api/product', passportJWT, controllers.product.getAll);
    // app.get('/api/product/user', passportJWT, controllers.product.getByUser);
    // app.get('/api/product/:id', passportJWT, controllers.product.getById);
    // app.delete('/api/product/:id', passportJWT, controllers.product.del);


}
