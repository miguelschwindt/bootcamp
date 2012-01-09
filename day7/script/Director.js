define(function(){
		return {
			name : '',
			quotes : [], 
			setName : function(n){
					name = n;
				},
			getName : function(){
					return name;
				},
			setQuotes : function(q){
					this.quotes.push(q);
				},
			Speak : function(){
					return this.quotes;
				}
	}
});

