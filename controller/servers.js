const Server = require('../models/server');

// create a new server
const createServer = (req,res)=>{
  const { user, servName, servPicture } = req.body;
	// create new server object
  const server = new Server({
    creator: user,
    server_name: servName,
    server_picture: servPicture
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
      res.status(500).json({
        error: err
      });
    });
};

// get servers associated with selected server
const getServer = (req,res)=>{
  let filter = {}
  const { server } = req.params;
  if(server !== "all"){
    filter = { _id: server };
  }
  // collect server objects
  Server
    .find(filter)
    .populate("participants")
    .then(result => {
      res.status(200).json({
        message: "server gevonden",
        server: result
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

// update a server channels array
const updateServer = (req,res)=>{
  const { id, chanId, chanName } = req.body;
  // update server object
  Server
    .update(
    { _id: id }, 
    { $addToSet: { channels: { id: chanId, channel_name: chanName} }},
    (error, success) =>{
        if (error) {
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
      res.status(500).json({
        error: err
      });
    });
};


module.exports = { createServer, getServer, updateServer };