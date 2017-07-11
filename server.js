
// Blakes stuff, just for reference
const express = require('express')  
const app = express() ; 
const port = 8080;
const fs = require("fs");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');






// // when the project is live on heroku use MONGO_URI instead of the url 
// // and password/ username. If you push to github like this, anyone 
// //write on your  db
mongoose.connect(process.env.MONGODB_URI, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
// });

});



//creating schema for films
filmsSchema = new mongoose.Schema({
	id : String,
	name: String,
	cast: String,
	director: String,
	img: String,
	decade: String,},
	{collection: 'films'});


//assign a functuion to it
// Todo = mongoose.model('Todo', Schema);
mongoose.model('films', filmsSchema);
var Fims = mongoose.model('films');






directorsSchema = new mongoose.Schema({

	id: String,
	name: String,
	about: String}
	{collection: 'directors'});

mongoose.model('directors', directorsSchema);
var Directors = mongoose.model('directors');











// getting port from heroku settings
app.listen(process.env.PORT || 5000, function(err) {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`Magic is happening on ${port}`)
});



app.get('/', function(request, response) {  
  response.send('Hello from Express!');
  console.log('route succesfully getting hit');
});


// THIS GETS FILMS AND DIRECTORS FROM JSON. IT WORKS



// var films = [];
// var directors =[];

// fs.readFile('directors.json', 'utf8', function (err, data){
// 	      if(err) throw err;
// 	      directors = JSON.parse(data);

// 	fs.readFile('films.json', 'utf8', function (err, data){
// 	      if(err) throw err;
// 	      films = JSON.parse(data);
// 	      function getdir(films){for(var i = 0; i< films.length; i++){
// 				var dir = directors[films[i].director];
// 				films[i].director = dir;
// 				}};
// 			getdir(films);	
	      
// 	     });
// });

//END OF JSON STUFF


// for(var i = 0; i< films.legth; i++){
// 	var dir = directors[films[i].director];
// 	films[i].director = dir;
// }



app.get('/directors', function(request, response) {  
	Directors.find(function(err,directors){
		response.send(directors);
	})
  	
	console.log('directors were sent');
});


app.get('/films', function(request, response) {  
	Films.find(function(err,films){
		response.send(films);
	})
	console.log('films were sent');
});








