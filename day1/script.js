$(document).ready(function(){
	//	alert("La pagina se ha cargado correctamente");
		displayAlert();
		moveCursor();
		buttonAjax();
		

});
function displayAlert()
{
	alert("La pagina se ha cargado correctamente");
}
function moveCursor(){
		var cursor = $("#alias");
		cursor.focus(); 
		$(".panel").slideDown("slow");
}

function buttonAjax()
 {
	$("#buttonAj").click(function(){
     $.post('../day1/api/dispatcher.php', 
     {service: 'welcome.hello',
      params: {"name": $('#alias').val()}})
      .success(function(dataFromServer) { 
      		$('#response').html(dataFromServer);
      		$('#response').css("background-color","lightgreen");})
      .error(function() { 
      		$('#response').html('error in the service');
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
 }


