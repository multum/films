const mongoose = require('mongoose');

const filmsSchema = mongoose.Schema({
  'title': {
    type: String,
    required: true
  },
  'release year': {
    type: String,
    required: true
  },
  'format': {
    type: String,
    required: true
  },
  'stars': {
    type: String,
    required: true
  }
});

filmsSchema.statics.addFilms = function (arrayDocuments, callback) {
  this.model('Film').insertMany(arrayDocuments, (callback || function () {}));
};

module.exports = mongoose.model('Film', filmsSchema);