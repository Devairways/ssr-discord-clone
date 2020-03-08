const User = require('../models/user');

const authHandler = (req,res)=>{
  console.log(req)
  console.log(req.body)
  // query mongoDB 
	User
    .find({ username: req.body.username })
    .then( user =>{
        // check if user is found
        if(user.length > 0){
          user.online = true;
          // user.save();
          res.status(200).json({user}) 
        }
        else{
          res.status(404).json("No user was found")
        }
      })
      .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
      });
};

module.exports = { authHandler };