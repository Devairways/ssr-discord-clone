const User = require('../models/user');

const updateUser = (req,res)=>{
  const { user, servName, servId, param, data} = req.body
  // query mongoDB 
	User
    .findByIdAndUpdate(
      user,
      { $addToSet: { servers: { server_name: servName, id: servId }}},
      {new: true})
    .then( user =>{
        console.log(user)
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