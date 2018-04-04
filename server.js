const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRouters = require('./server/api');
const dbConfig = require('./server/db');

const app = express();
mongoose.connect(dbConfig.url);

app.listen(process.env.PORT || 3001);

app.set('view engine', 'html');
app.set('views', __dirname + '/client/build');

app.use(cors({origin: '*'}));
app.use('/', express.static(__dirname + '/client/build'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const db = mongoose.connection;

app.get('/', function (req, res) {
  res.render('index');
});

db.once('open', () => {
  apiRouters.forEach(router => app.use('/api', router));
  app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send(err);
  });
});