const User = require('../models/user');

const authHandler = (req,res)=>{
  // query mongoDB 
	User
    .find({ username: req.body.username, password: req.body.password })
    .then( user =>{
        // check if user is found
        if(user.length > 0){
          user.online = true;
          res.status(200).json({user}) 
        }
        else{
          res.status(404).json("No user was found")
        }
      })
      .catch(err => {
            res.status(500).json({
              error: err
            });
      });
};

module.exports = { authHandler };