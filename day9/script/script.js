var localBackbone = Backbone.noConflict();
window.Movie = localBackbone.Model.extend({
				a : "",
				b : "",
	       initialize: function(aa,bb){
            a=aa;
            b=bb;
            console.log("Movie created "+a+" "+b);
        },
        play : function(){
        		console.log("Playing "+this.get("title")+" "+a);},
        stop : function(){
        		console.log("Stopping "+this.get("title"));}
        
});

window.Movieteca = localBackbone.Collection.extend({
		model: Movie
		
});

window.MovieView = localBackbone.View.extend({
		model : Movie,
		el : $("#modelo"),
		render: function() {
			//var template = _.template( $(this.el).html(), {} );
      // Load the compiled HTML into the Backbone "el"
     // this.el.html( template );
			//$(this.el).html(this.template(this.model.toJSON()));
			$(this.el).html(this.model.get("title"));
			console.log("renderizo");
    	return this;
  	}
});

function run(){  
	 
movie = new Movie("a","b");
movie.set({ title : "Star wars",
					  rating  : "1",
					  id : "12"					 
					 });
movie2 = new Movie("a","b");
movie2.set({ title : "Batman",
					  rating  : "1",
					  id : "12"					 
					 });
console.log(movie.attributes );
movie.play();

var movieteca = new Movieteca([movie,movie2]);
// Miguel Sch , muestro objetos
console.log(movieteca.models);

var titles = movieteca.map(function(book) {
  return book.get("title");
});
console.log(titles);
var view = new MovieView();

//alert(JSON.stringify(movie));
};