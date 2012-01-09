require(['script/Movie','script/Director'], function(movie,dir) {
			console.log('Load script/movie.js and script/Director finished');
			movie.setTitle('star wars');
			var peli = movie.getTitle();
			console.log(peli);
			movie.play();
			movie.stop();		
			
			
			dir.setName('Quentin Tarantino');
			dir.setQuotes('this is 2d movie Pulp Fiction');
			dir.setQuotes('Kill Bill Vol.1, do not like me');
			dir.setQuotes('Kill Bill Vol.2 is my favorite');
			
			movie.setDirector(dir);
			
			var cuote = movie.getDirector().Speak();
			console.log(cuote);
			
});
