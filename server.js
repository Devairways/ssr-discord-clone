const next = require("next");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const registrate = require("./controller/registrate");
const login = require("./controller/login");
const channels = require("./controller/channels");
const servers = require("./controller/servers");
const users = require("./controller/users");


// configs voor server
dotenv.config()
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()


// MongoDB Server
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, reconnectTries: 5 })
    .then(()=>{
      console.log("MongoDB connected");
       
    })
    .catch((dbErr)=>{
        console.log("DB Connection Error: ", dbErr.message);
        process.exit(1);
    });



// Routes
app.prepare().then(() => {
  const server = express();

  // Middleware
  server.use(bodyParser.json());
  server.use(morgan("tiny"));
  
  // requests login
  server.get("/", (req, res) => {
    return app.render(req, res, "/", req.query);
  });
  server.post("/", (req,res) => { login.authHandler(req,res) });

  // request register
  server.get("/register", (req, res) => {
    return app.render(req, res, "/", req.query)
  });

  // requests dashboard use
  server.get("/dashboard", (req, res) => {
    return app.render(req, res, "/Dashboard", req.query)
  });

  
  // user routes
  server.post("/register", (req,res) => { registrate.regHandler(req,res) });
 
  server.put("/user/:user", (req, res) => { users.updateUser(req,res) });

  
  // server routes
  server.get("/server/:server", (req, res) => { servers.getServer(req,res) });

  server.post("/server", (req, res) => { servers.createServer(req,res) });

  server.put("/server", (req, res) => { servers.updateServer(req,res) });

  // channel routes
  server.get("/channel/:server", (req, res) => { channels.getChannel(req,res) });

  server.post("/channel", (req, res) => { channels.createChannel(req,res) });

  server.put("/channel", (req, res) => { channels.updateChannel(req,res) });
  
 

  // catch all others
  server.all("*", (req, res) => {
    return handle(req, res)
  })
  
 // Activeer server
  server.listen(port, err => {
    console.log(process.env.DB_URL)
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })

})