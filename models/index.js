var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");	//name of database app

module.exports.Album = require("./album.js");
