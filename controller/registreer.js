const regHandler = (req,res)=>{
	 // creeerd new user object
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });
    user
      .save()
      .then(result => {
        res.status(200).json({
          message: "Nieuwe gebruiker toegevoegd",
          createdUser: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
};

module.exports = regHandler;