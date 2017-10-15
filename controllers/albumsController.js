
// var albums = [{
//   _id: 132,
//   artistName: 'Nine Inch Nails',
//   name: 'The Downward Spiral',
//   releaseDate: '1994, March 8',
//   genres: [ 'industrial', 'industrial metal' ]
// }, {
//   _id: 133,
//   artistName: 'Metallica',
//   name: 'Metallica',
//   releaseDate: '1991, August 12',
//   genres: [ 'heavy metal' ]
// }, {
//   _id: 134,
//   artistName: 'The Prodigy',
//   name: 'Music for the Jilted Generation',
//   releaseDate: '1994, July 4',
//   genres: [ 'electronica', 'breakbeat hardcore', 'rave', 'jungle' ]
// }, {
//   _id: 135,
//   artistName: 'Johnny Cash',
//   name: 'Unchained',
//   releaseDate: '1996, November 5',
//   genres: [ 'country', 'rock' ]
// }];

var db = require('../models'); 

// function index(req, res) {
//   let newArray = [];
//   for (j=0; j<albums.length; j++) {
//     newArray.push(albums[j]);
//   }
//   // res.json({"data": newArray});
//   res.json(newArray);
// }

/*** For GET /api/albums route ***/
function index(req, res) { 
  // get all albums from the database 
  db.Album.find({}, function(err, allAlbums) {
    if (err) { console.log("GET /api/albums controller burped",err); }
    console.log("~~~~", allAlbums);
    res.json(allAlbums);
  });
}

module.exports = {
  index: index,
//   create: create,
//   show: show,
//   destroy: destroy,
//   update: update
};
