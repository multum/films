const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRouters = require('./server/api');
const dbConfig = require('./server/db');

const app = express();
mongoose.connect(dbConfig.url);

app.listen(3001);
app.use(cors({origin: '*'}));
app.use('/', express.static('./client/build'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const db = mongoose.connection;

app.get('/', function (req, res) {
  res.render('./client/build/index.html');
});

db.once('open', () => {
  apiRouters.forEach(router => app.use('/api', router));
  app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send(err);
  });
});







