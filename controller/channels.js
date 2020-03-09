const Channel = require('../models/channel');

// create a new channel
const createChannel = (req,res)=>{
	// create new channel object
  const channel = new Channel({
    creator: req.body._id,
    channel_name: req.body.channel_name,
    server: req.body.server_name
  });
  // push it to channel collection
  channel
    .save()
    .then(result => {
      res.status(200).json({
        message: "Nieuw kanaal aangemaakt",
        createdChannel: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

// get channels associated with selected server
const getChannel = (req,res)=>{
  const { server } = req.params;
  // collect channel objects
  Channel
    .find({server: server})
    .then(result => {
      res.status(200).json({
        message: "gevonden kanalen: " + result.length,
        channelList: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

// update a channel messages array
const updateChannel = (req,res)=>{
  const { _id, channel } = req.body;
  // update channel object
  Channel
    .update(
    { channel_name: channel }, 
    { $push: { messages: _id } 
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


module.exports = { createChannel, getChannel, updateChannel };