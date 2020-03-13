const Server = require('../models/server');

// create a new server
const createServer = (req,res)=>{
	// create new server object
  const server = new Server({
    creator: req.body._id,
    server_name: req.body.server_name
  });
  // push it to server collection
  server
    .save()
    .then(result => {
      res.status(200).json({
        message: "Nieuwe server aangemaakt",
        createdServer: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

// get servers associated with selected server
const getServer = (req,res)=>{
  const { server } = req.params;
  // collect server objects
  Server
    .find({_id: server})
    .then(result => {
      res.status(200).json({
        message: "server gevonden",
        server: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

// update a server channels array
const updateServer = (req,res)=>{
  const { _id, server_name } = req.body;
  // update server object
  Server
    .update(
    { server_name: server_name }, 
    { $addToSet: { channels: _id }},
    (error, success) =>{
        if (error) {
            console.log(error);
            res.status(500).json({
            message: "could not update server"
            });
        }
    })
    .then(result => {
      res.status(200).json({
        message: "succes"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};


module.exports = { createServer, getServer, updateServer };