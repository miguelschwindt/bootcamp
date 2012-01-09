define(['script/Director'],function(dir){
		return {
			tit : '',
			rating : 1,
			id : 0,
			actors : [],
			 
			setTitle : function(titulo){
					tit = titulo;
				},
			getTitle : function(){
					return tit;
				},
			setId : function(ide){
					id = ide;
				},
			getId : function(){
					return id;
				},
			setRating : function(rat){
					rating = rat;
				},
			getRating : function(){
					return rating;
				},
			play : function(){
					console.log('playing '+this.getTitle());
				},
			stop : function(){
					console.log('stopping '+this.getTitle());
				},
			setDirector : function(dir){
					 director = dir;
				},
			getDirector : function(){
					return director;
				}
			
	}
	

});

