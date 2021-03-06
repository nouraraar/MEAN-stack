const express= require('express');
const app = express();
const stuffRoutes=require('./Routes/stuff');
const userRoutes=require('./Routes/user');
const bodyParser = require('body-parser');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/stuff',stuffRoutes);
app.use('/api/auth',userRoutes);

module.exports = app ;
