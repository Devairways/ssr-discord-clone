const next = require('next');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const registreer = require('./controller/registreer');

const User = require('./models/user');
const Channel = require('./models/channel');
const Messages = require('./models/messages');


// configs voor server
dotenv.config()
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


// MongoDB Server
mongoose.connect(process.env.DB_URL, { reconnectTries: 5 })
    .then(()=>{
      console.log("MongoDB connected");
       
    })
    .catch((dbErr)=>{
        console.log("DB Connection Error: ", dbErr.message);
        process.exit(1);
    });



// Routes
app.prepare().then(() => {
  const server = express()

  // Middleware
  server.use(bodyParser.json())
  server.use(morgan('tiny'))
  
  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.get('/register', (req, res) => {console.log(req)
    return app.render(req, res, '/Register', req.query)
  })

  server.get('/dashboard', (req, res) => {
    return app.render(req, res, '/Dashboard', req.query)
  })

  server.post('/register', (req,res) => { registreer.regHandler(req,res) });

  server.all('*', (req, res) => {
    return handle(req, res)
  })
  
 // Activeer server
  server.listen(port, err => {
    console.log(process.env.DB_URL)
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })

})