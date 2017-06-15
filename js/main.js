
var lineCount = 1;

$(document).ready(function(){
	
	console.log("got here");
	addLineNum();
	console.log("got here too");
    $("textarea").keyup(function(e) {
    	console.log("key was pressed");
	   var code = e.keyCode ? e.keyCode : e.which;
	   console.log("key was " + code);
	   if (code == 13) {  // Enter keycode
	   		console.log("in here");
	 	   addLineNum();
	   }
	});
}); 


function addLineNum() {
	//console.log("before appending");
	$("#line-nums").append('<li class="list-group-item">' + lineCount + '</li>');
	lineCount++;
}