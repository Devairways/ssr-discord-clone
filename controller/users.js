const User = require('../models/user');

const updateUser = (req,res)=>{
  const { user, arrItem, param, data} = req.body
  // query mongoDB 
	User
    .update(
      { _id: user },
      { $push: { servers: arrItem }})
    .then( user =>{
        // check if user is found
          res.status(200).json({user}) 
      })
      .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
      });
};

module.exports = { updateUser };