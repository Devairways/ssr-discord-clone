const Channel = require('../models/channel');

// create a new channel
const createChannel = (req,res)=>{
  const { id, chanName, servId } = req.body;
	// create new channel object
  const channel = new Channel({
    creator: id,
    channel_name: chanName,
    server: servId
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
      res.status(500).json({
        error: err
      });
    });
};

// get channels associated with selected server
const getChannel = (req,res)=>{
  const { channel } = req.params;
  // collect channel objects
  Channel
    .find({ _id: channel })
    .then(result => {
      res.status(200).json({
        message: "gevonden kanalen: " + result.length,
        channelList: result
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

// update a channel messages array
const updateChannel = (req,res)=>{
  const { user, msg, channel } = req.body;
  // update channel object
  Channel
    .update(
    { _id: channel }, 
    { $push: { messages: { text: msg, author: user } } 
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


module.exports = { createChannel, getChannel, updateChannel };