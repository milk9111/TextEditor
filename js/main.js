
var lineCount = 1;
var lineSpace = "      ";

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
	console.log("before appending");
	$("textarea").val($("textarea").val() + lineCount + lineSpace);
	console.log(lineCount + lineSpace);
	console.log($("textarea").val());
	console.log("after appending");
	lineCount++;
}