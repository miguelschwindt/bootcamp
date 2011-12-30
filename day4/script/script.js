var Movie = function (){
	
	this.tit='';
	this.rating=0;
	this.id=1;
	this.observadores = [];
	this.actors = [];
	
	Movie.prototype.setCast = function(cast){
				esto  = this;
				$.each(cast,
					function(index,value){
						esto.actors.push(value);
					});
	};
	Movie.prototype.getCast = function(){
				esto  = this;
				$.each(this.actors,
					function(index,value){
						//console.log(value.getName());
					});
					return esto.actors;
	};
	
	Movie.prototype.getTitle = function(){
				return this.tit;
	};
	Movie.prototype.setTitle = function(titulo){
				this.tit = titulo;
	};
	
	
	Movie.prototype.getRating = function (){
				return this.rating;
	};
	Movie.prototype.setRating = function (rait){
				rating = rait;
	};
	Movie.prototype.getId = function (){
				return this.id;
	};
	Movie.prototype.setId = function (ide){
				this.id = ide;
	};
	
	Movie.prototype.play= function(){
				console.log('Playing '+this.getTitle());
				this.publish('watching');
	};
	Movie.prototype.stop= function(){
				console.log('Stopping '+this.getTitle());
				this.publish('NOT watching');
	};
	Movie.prototype.subscribe= function(observador,param){
		// chequear si ya existe un set para este tipo de evento
			var exist=false;
			$.each(this.observadores, function(index,value){
									if (value.observador === observador){
											exist=true;
									}
			});
			if (! exist){
						this.observadores.push({
						observador:observador,
						param:param});
						console.log('agrego un observador '+ observador.getName()+' al evento');
			}
			else{	console.log('NO agrego observador');}
			return this;
		};
		
	Movie.prototype.unSubscribe= function(observador){
			this.observadores = this.observadores.filter(
						function(saved){
							if (saved.observador !== observador){
									return saved;
							}
							console.log('Se fue observador: '+ observador.getName());
						}
			);	
			return this;
		};
		
	Movie.prototype.publish= function(param){
		//si no hago esta asignacion(esto=this), me tira error si hago this.getTitle()
		//porq es... no se.. pero asi de esta manera anda...
			var esto = this;
			$.each(this.observadores,
						 function(index,value){
						 			obj=value.observador;
						 			val = value.param+param+' '+esto.getTitle();
						 			obj.onPublish(val);
						 }
			);
			
		};
}

var DownloadableMovie = function(){};
DownloadableMovie.prototype = {
		download : function(){	
				console.log('Downloading the movie '+ this.getTitle());
		}
};

var SocialMovie = function(){};
SocialMovie.prototype = {
		share : function(param){	
				console.log('Shareing '+this.getTitle()+' with '+param);
		},
		like : function(param){
				console.log(param+' Likes '+this.getTitle());
		}
};

var Actor = function(setin){
	 var name=setin.name;
	 var biography=setin.bio;
	getName = function(){
		return name;
	};
	getBiography = function(){
		return biography;
	};
	return{
		getName:getName,
		getBiography:getBiography
	};
	
};

function augment(receivingClass,givingClass){
				for (var methodName in givingClass.prototype) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            
        }
        return receivingClass;
}

//aca esta el observador que mira la Movie

function MovieObserver(n){
	
	var name = n;
	return{
				onPublish : function(val){
								console.log(name+val);
				},
				getName : function(){
						return name;
				}
	};
	
};


function call(){
		
	var movie = new Movie;
	
	movie.setTitle('caperusa roja');
	movie.setRating(21);
	movie.setId(4);
	
	console.log('se creo una nueva peli '+movie.getTitle()+' '+movie.getRating()+' '+movie.getId());
	
	console.log(movie.getId());
	movie.setId(21);
	console.log(movie.getId());
	movie.setTitle('Star Wars')
	console.log(movie.getTitle());
	movie.play();
	movie.stop();
	
	var observer_1 = new MovieObserver('MovieObserver 1');
	var observer_2 = new MovieObserver('MovieObserver 2');
	var observer_3 = new MovieObserver('MovieObserver 3');
	
	movie.subscribe(observer_1, ' is ');
	movie.subscribe(observer_2, ' is ');
	movie.subscribe(observer_3, ' is ');
	
	movie.play();
	movie.stop();
	movie.unSubscribe(observer_1);
	movie.play();
	movie.subscribe(observer_3, ' is ');
	movie.subscribe(observer_3, ' is ');
	movie.subscribe(observer_1, ' is ');
	movie.stop();
	
	
	augment(Movie,DownloadableMovie );
	augment(Movie,SocialMovie );
	
	movie.download();
	movie.share('Peter');
	movie.like('Peter');
	
	var deep = new Actor({name:'Johny Deep',bio:' This is the biography'});
	var jolie = new Actor({name:'Angelina Jolie',bio:' This is the biography'});
	
	console.log(deep.getName()+' bio: '+deep.getBiography());
	console.log(jolie.getName()+' bio: '+deep.getBiography());
	
	movie.setCast([deep,jolie]);
	console.log(movie.getCast()[0].getName());
	
	
}
	