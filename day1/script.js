$(document).ready(function(){
	//	alert("La pagina se ha cargado correctamente");
		displayAlert();
		moveCursor();
		

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


