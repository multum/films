const routers = require('express').Router();
const fs = require('fs');
const parseFilmsFile = require('../../utils/parseFilmsFile');
const Film = require('./models/film');
const multer = require('multer');
const upload = multer({'dest': `${process.cwd()}/server/uploads`});

const sendResult = (res, err, result) => {
  if (err || (!err && !result)) {
    return res.status(400).send(err);
  }
  if (result) {
    return res.send(result);
  }
};

/**
 * req.body contains FormData fields for creation of the Film document
 */
routers.post('/films/add', upload.fields([]), function (req, res) {
  Film.addFilms([req.body], (err, result) => sendResult(res, err, result));
});


routers.get('/films', function (req, res) {
  let {limit, skip = 0, sort = 'title', searchKey, searchValue, count} = req.query;
  const queryParams = {
    limit: parseInt(limit),
    skip: parseInt(skip),
    sort: {[sort]: 1}
  };
  if (!(searchKey && Film.schema.obj.hasOwnProperty(searchKey))) {
    searchKey = 'title';
  }

  const searchParams = searchValue ? {[searchKey]: new RegExp(searchValue, 'i')} : {};
  Film.find(searchParams, null, queryParams, (err, result) => {
    if (+count) {
      Film.count().then(function (totalCount) {
        sendResult(res, err, {films: result, totalCount});
      });
    } else {
      sendResult(res, err, {films: result});
    }
  });
});

routers.get('/films/:value', function (req, res) {
  let {searchKey} = req.query;
  let {regexp} = req.query;
  regexp = parseInt(regexp);

  if (!(searchKey && Film.schema.obj.hasOwnProperty(searchKey))) {
    searchKey = 'title';
  }

  let value = req.params.value;
  if (regexp) {
    value = new RegExp(req.params.value, 'i');
  }

  Film.findOne({[searchKey]: value}, (err, result) => sendResult(res, err, result));
});

routers.delete('/films/:id', function (req, res) {
  Film.findByIdAndRemove(req.params.id, (err, result) => sendResult(res, err, result));
});

routers.delete('/films', function (req, res) {
  Film.remove({}, (err) => sendResult(res, err, 'All films deleted'));
});

/**
 * Parsing one file with the name "films" from the FormData
 */
routers.post('/films/upload-file', upload.single('films'), function (req, res) {

  const filePath = req.file.path;
  if (!filePath) return sendResult(res, 'Bad FormData');

  const file = fs.readFileSync(filePath, 'utf-8');
  const arrayFilms = parseFilmsFile(file);

  Film.addFilms(arrayFilms, (err, result) => sendResult(res, err, result));

  // remove the file after parsing and sending to db
  fs.unlink(filePath);
});

module.exports = routers;