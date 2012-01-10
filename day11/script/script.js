function disp(){
      	var data = $( 'textarea' ).val();
      	var save = $( 'input:checked' ).val();
      	console.log(save);
      	if (save){
      			window.localStorage.setItem('value', "<script>"+data+"</script>");
	        	window.localStorage.setItem('timestamp', (new Date()).getTime());
	        	alert("data guardada");
      	}
      	$('#log').append('<script>'+data+'</script>');    	
}
function dragAndDrop(){
	document.querySelector('#dropzone').addEventListener('drop', function(e) {
	e.dataTransfer.effectAllowed = e.target.className;
  e.target.style.border = "4px solid #cc3300";
  var reader = new FileReader();
  reader.onload = function(evt) {
    document.querySelector('img').src = evt.target.result;
  };

  reader.readAsDataURL(e.dataTransfer.files[0]);
}, false);
}
function drop(){
		alert('dropearon algo');
}