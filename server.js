
// Blakes stuff, just for reference
const express = require('express')  
const app = express() ; 
const port = 8080;
const fs = require("fs");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


//CONECTING TO MONGO 
// ** SECTION ISOLATED, TESTED, AND WORKING

			

// when the project is live on heroku use MONGO_URI instead of the url 
// and password/ username. If you push to github like this, anyone 
//write on your  db

			//WHEN LIVE


mongoose.connect(process.env.MONGODB_URI, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
// });

});


		//LOCAL
// mongoose.connect(INSERT-MONGO-URL, function (error) {
//     if (error) console.error(error);
//     else console.log('mongo connected');
// // });

// });


//SOME INTERNET GUY SAID TO USE BODY PARSER LINK : https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
// first response is outdated(I tried), so go for second

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extende: false}))
app.use(bodyParser.json());




//CREATING SCHEMAS AND ASSIGNING VARIABLES

// ** when I uncomented this section, the app crashed
// this is where the is 
				
				// UPDATE: CRASH FIXED, THIS PART WORKS
				

	
				


					//sub section isolation
					//uncoment this 2.2
					//this part does not appear to be broken

//creating schema for films
filmsSchema = new mongoose.Schema({
	id : String,
	name: String,
	cast: String,
	director: String,
	img: String,
	decade: String},
	{collection: 'films'});




















//assign a functuion to it
// Todo = mongoose.model('Todo', Schema);
mongoose.model('films', filmsSchema);
var Films = mongoose.model('films');



				//sub section isolation
				//uncoment this 2.1
				//Fixed!!


directorsSchema = new mongoose.Schema({
	id: String,
	name: String,
	about: String},
	{collection: 'directors'});

mongoose.model('directors', directorsSchema);
var Directors = mongoose.model('directors');





//GETTING PORT AND TESTING RESPONSE
// ** SECTION ISOLATED, TESTED, AND WORKING							


// port from heroku settings
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


//END OF PORT AND TEST






				
          											

app.get('/directors', function(request, response){  
	Directors.find(function(err,directors){
		if(err){
			console.log('error with director find')
		}else{
			response.send(directors);
		}
		
	})


  	//testing -- response and get work-- problem is in find
  	// response.send('directors');
	console.log('directors were sent');
});



app.get('/films', function(request, response){  
	Films.find(function(err,films){
		if(err){
			console.log('error with films find')
		}else{
			response.send(films);
		}
		
	})
	console.log('films were sent');
});



var nameDIr = '';
var thisDir = {};

app.post('/this-director', function(request, response){

	console.log("posted to this-director");
	console.log(request.body);


	nameDir = request.body.director;
	console.log(nameDir);

	//did this for test, CHANGE NAME TO nameDir
	Directors.find({name: nameDir},function(err,director){
		if(err){
			console.log('error with this-director find')
		}else{
			thisDir = director;
			console.log(thisDir);
			response.send(thisDir);
		}
		
	})
})

app.post('/new-director', function(request, response){

	console.log("posted to new-director");
	console.log(request.body);


	//add request to directors collection
	director = new Directors(request.body);


	director.save(function(err){
		if(err){
        	response.send({"ERROR":"something went wrong"});
	    }else{
	       	response.send(director);
	    }

	})

})

app.post('/new-film', function(request, response){

	console.log("posted to new-film");
	console.log(request.body);


	//add request to film collection
	film = new Films(request.body);

	console.log(film);
	film.save(function(err){
		if(err){
        	response.send({"ERROR":"something went wrong"});
	    }else{
	    	console.log("not error")
	       	response.send(film);
	    }
	    
	})	



})


app.post('/delete', function(request, response){

	console.log("posted to delete");
	console.log(request.body);
	console.log(request.body.filmDel);
	console.log(request.body.directorDel);

	var dirDelName = request.body.directorDel;
	var filmDelName = request.body.filmDel;

	//find director
	Directors.find({name: dirDelName},function(err,director){
		if(err){
			console.log('error with this-director find')
		}else{
			 
			console.log(director);
			
		}
		
	})
	//find director
	Films.find({name: filmDelName},function(err,film){
		if(err){
			console.log('error with this-director find')
		}else{
			 
			console.log(film);
			
		}
		
	})


	//delete these items
	



})


////create new user
// app.post('/new-user', function(request, response){

// 	console.log("posted to new-film");
// 	console.log(request.body);


// 	//add request to film collection
// 	user = new User(request.body);

// 	console.log(film);
// 	user.save(function(err){
// 		if(err){
//         	response.send({"ERROR":"something went wrong"});
// 	    }else{
// 	    	console.log("not error")
// 	       	response.send(user);
// 	    }
	    
// 	})	



// })

var logged = false;
var editor = false;


app.post('login', function(request, response){

	console.log("posted to this-director");
	console.log(request.body);


	user = request.body.director;
	console.log(user);

	//did this for test, CHANGE NAME TO nameDir
	Directors.find({name: user.username, password: user.password},function(err,user){
		if(err){
			console.log('error with this-director find')
		}else{
			thisDir = director;
			console.log(thisDir);
			response.send(thisDir);
		}
		
	})
})










// END OF API REQUESTS





