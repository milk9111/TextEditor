
var lineCount = 1;
var paddingOffset = 0;

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
	$("#line-nums").append('<div><label style="font-size: 75%;margin-bottom: 0px;' 
		+ 'padding-top: ' + (10 - paddingOffset) + 'px;">' + lineCount + '</label></div>');
	paddingOffset+=10;
	lineCount++;
}