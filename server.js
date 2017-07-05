const express = require('express')  
const app = express()  
const port = 8080

app.listen(port, function(err) {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`Magic is happening on ${port}`)
});



app.get('/', function(request, response) {  
  response.send('Hello from Express!');
  console.log('route succesfully getting hit');
});


var directors =[

	{
		name: 'Yasujirō Ozu',
		about:'Yasujirō Ozu was a Japanese film director and screenwriter. He began his career during the era of silent films. Ozu first made a number of short comedies, before turning to more serious themes in the 1930s.'
	},

	{
		name: 'Akira Kurosawa',
		about:'Akira Kurosawa was a Japanese film director and screenwriter. Regarded as one of the most important and influential filmmakers in the history of cinema, he directed 30 films in a career spanning 57 years'
	},

	{
		name: 'Ishirō Honda',
		about:'Ishirō Honda, sometimes miscredited in foreign releases as "Inoshiro Honda", was a Japanese film director.'
	},

	{
		name: 'Seijun Suzuki',
		about:'Seijun Suzuki, born Seitaro Suzuki, was a Japanese filmmaker, actor, and screenwriter. His films are known for their jarring visual style, irreverent humour, nihilistic cool and entertainment-over-logic sensibility.'
	},

	{
		name: 'Nobuhiko Obayashi',
		about:'Nobuhiko Obayashi is a Japanese director, screenwriter and editor of films and television advertisements who is well known for his surreal visual style.'
	},

	{
		name: 'Juzo Itami',
		about:'Juzo Itami, born Yoshihiro Ikeuchi, was a Japanese actor, screenwriter and film director. He directed ten films, all of which he wrote himself.'
	},

	{
		name: 'Takashi Miike',
		about:'Takashi Miike is a highly prolific and controversial Japanese filmmaker. He has directed over ninety theatrical, video, and television productions since his debut in 1991.'
	},

	{
		name: 'Hayao Miyasaki',
		about:'Hayao Miyazaki is a Japanese film director, producer, screenwriter, animator, author, and manga artist.'
	},

	{
		name: 'Takeshi Kitano',
		about:'Takeshi Kitano is a Japanese comedian, television personality, director, actor, author, and screenwriter. While he is known primarily as a comedian and TV host in his native Japan, abroad he is known almost entirely for his filmwork.'
	}


]



var films = [
	
	{
	name: 'I Was Born, But...' ,
	summary: 'Two young brothers become the leaders of a gang of kids in their neighborhood. Their father is an office clerk who tries for advancement by playing up his boss. When the boys visit the boss\'s house with their father, they discover that their dad has been making a fool of himself to please his boss, who\'s son is an outwitted member of the boys gang. The brothers revolt claiming that hierarchy should be based on ability, not on social background. Ozu\'s charming film is a social satire that draws from the antics of childhood as well as the tragedy of maturity. writen by Peter Renoir Nakai',
	cast:'Tatsuo Saitô <br>Tomio Aoki <br>Mitsuko Yoshikawa',
	director: directors[0],
	img: "images/ozu1.jpg",
	decade:1930
	},

	{ name: 'Nora Inu' ,
	summary: 'During a sweltering summer, a rookie homicide detective tries to track down his stolen Colt pistol.',
	cast:'Toshirô Mifune <br>Takashi Shimura <br>Keiko Awaji',
	director: directors[1],
	img: "images/norainu1.jpg",
	decade:1940
	},

	{ name: 'Gojira' ,
	summary: 'American nuclear weapons testing results in the creation of a seemingly unstoppable, dinosaur-like beast.',
	cast:'Takashi Shimura <br>Akihiko Hirata <br>Akira Takarada ',
	director: directors[2],
	img: "images/gojira2.jpg",
	decade:1950
	},


	{ name: 'Tokyo Drifter' ,
	summary: 'After his gang disbands, a yakuza enforcer looks forward to life outside of organized crime but soon must become a drifter after his old rivals attempt to assassinate him.',
	cast:'Tetsuya Watari <br>Chieko Matsubara <br>Tamio Kawaji',
	director: directors[3],
	img: "images/drifter1.jpg",
	decade:1960
	},


	{ name: 'House' ,
	summary: 'A schoolgirl and six of her classmates travel to her aunt\'s country home, which tries to devour the girls in bizarre ways.',
	cast:'Kimiko Ikegami <br>Miki Jinbo <br>Kumiko Ohba',
	director: directors[4],
	img: "images/house3.jpg",
	decade:1970
	},

	{ name: 'Tampopo Juzo Itami' ,
	summary: 'A truck driver stops at a small family-run noodle shop and decides to help its fledgling business. The story is intertwined with various vignettes about the relationship of love and food.',
	cast:'Ken Watanabe <br>Tsutomu Yamazaki <br>Nobuko Miyamoto',
	director: directors[5],
	img: "images/tampopo2.jpeg",
	decade:1980
	},

	{ name: 'Rainy Dog' ,
	summary: 'A Japanese assassin stranded in Taiwan must take work from a local crime boss to make ends meet when suddenly a woman from his past delivers a son to him.',
	cast:'Shô Aikawa <br>Li Wei Chang <br>Shih Chang',
	director: directors[6],
	img: "images/rainydog1.jpg",
	decade:1990
	},

	{ name: 'Spirited Away' ,
	summary: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts..',
	cast:'Daveigh Chase <br>Suzanne Pleshette <br>Miyu Irino',
	director: directors[7],
	img: "images/spirited1.jpg",
	decade:2000
	},

	{ name: 'Outrage' ,
	summary: 'The boss of a major crime syndicate orders his lieutenant to bring a rogue gang of drug traffickers in line, a job that gets passed on to his long-suffering subordinate.',
	cast:'Takeshi Kitano <br>Kippei Shîna <br>Ryo Kase ',
	director: directors[8],
	img: "images/outrage3.jpg",
	decade:2010
	},






]


app.get('/directors', function(request, response) {  
  response.send(directors);
  console.log('directors were sent');
});


app.get('/films', function(request, response) {  
  response.send(films);
  console.log('films were sent');
});








