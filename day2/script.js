$("#myPage").live('pageinit',function() {
        displayAlert();
        moveCursor();
        clicks();

});

function displayAlert()
{
	alert("La pagina se ha cargado correctamente");
}
function moveCursor(){
		var cursor = $("#alias");
		cursor.focus(); 
}

function clicks()
 {
	$("#buttonAj").click(function(){
     $.post('../day2/api/dispatcher.php', 
     {service: 'welcome.hello',
      params: {"name": $('#alias').val()}})
	  
      .success(function(dataFromServer) { 
      		$('#response').html(dataFromServer);
      		$('#response').css("background-color","lightgreen");})
      .error(function() { 
      		$('#response').css('background-color','red');});
      });
   $("#buttonMovie").click(function(){
   			$.ajax({
  						url: 'http://albertomiranda.com.ar/html5/bootcamp/api/dispatcher.php?service=movie.getTop',
  						type: 'POST',
  						dataType : 'jsonp',
  						crossDomain: true,
  						success: function(datos){
  							var metadatos = datos.data;
  							$.each(metadatos,function(indice,value){ 
  								$("#movieResponse").append("<div >" + 
  								"<ul>Movie:" +
  									"<li>Box Art: "+metadatos[indice].BoxArt.SmallUrl + "</li>" + 
  									"<li>Title: "+metadatos[indice].Name + "</li>" + 
  									"<li>Year: "+metadatos[indice].ReleaseYear + "</li>" + 
  									"<li>Synopsis: "+metadatos[indice].Synopsis + "</li>" + 
  								   "</ul></div>"); 
  							});
  							$( '#movieResponse' ).css( "padding-left","50%" );
  							$( '#movieResponse' ).css( "border","1px solid" );
  						},							
  						error: function(data){
  								alert('error response');
  						}
  				});
   });		

   $('#buttonLoader').click(function(){
   			$.mobile.showPageLoadingMsg();   		
   });
   $('body').keyup(function(key){
   			if ($.browser.mozilla  && key.which == 13){
   				$.mobile.hidePageLoadingMsg();
   			}
   			/*For IE , Safari and Chrome this is the ESC key */
   			if ( key.which == 27){
   				$.mobile.hidePageLoadingMsg();
   			}
   });
    
 }


