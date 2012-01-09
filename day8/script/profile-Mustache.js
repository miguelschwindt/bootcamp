var view = {
  "name": {"first":"miguel","last":"schwindt"},
  "age": '26',
  "job_actual": "Templetes",
  "work_experience"  : [
  	{"work" : "OOP Javascript"},
  	{"work" : "AMD"},
  	{"work" : "Mustache"}
  ],
  "contacts" : "100"
  
};

function makeProfile(){
		var htm = Mustache.to_html(
		"<br />This is a Profile for<br/ ><b>name</b>: {{name.first}} {{name.last}} "+ 
		"<br /><b>Age: </b>{{age}}"+
		"<br /><b>Actual Work: </b>{{job_actual}}"+
		"<br /><b>Previous Work: </b> "+
		"<ul>{{#work_experience}}"+
		"<li>{{work}}</li>"+
		"{{/work_experience}}</ul>"+
		"<br /><b>Contacts: </b>{{contacts}}" 
		,view	);
		$("#profile").html(htm);
		//return htm;
};