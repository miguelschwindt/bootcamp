$(document).ready(function(){
	//	alert("La pagina se ha cargado correctamente");
		displayAlert();
		moveCursor();
		buttonAjax();
		

});
function displayAlert()
{
	//alert("La pagina se ha cargado correctamente");
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
   		var json=$.post('../day1/api/dispatcher.php', 
   			{service: 'movie.getTop'})
   			.success(function(dataFromServer){
   			//la dataFromService supongo q me devuelve un archivo json(?)
   			//y lo parseo por (key,value)
   					$.getJSON(dataFromServer, function(data) {
  								var items = [];
  								$.each(data, function(key, val) {
    								items.push('<li id="' + key + '">' + val + '</li>');
  								});

  								$('<ul/>', {
    								'class': 'my-new-list',
    								html: items.join('')
  								}).appendTo('#movieResponse');
  								
						});
				})
   			.error(function(data){
   					//alert('Error in Service');
   					$('#movieResponse').html('error in the service');
      				$('#movieResponse').css('background-color','red');
   			});
   });		
   		   
    
 }


