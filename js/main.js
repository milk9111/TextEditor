
var lineCount = 1;
var paddingOffset = 0;

$(document).ready(function(){
	
	console.log("got here");
	addLineNum();
	console.log("got here too");
    $("#input").keydown(function(e) {
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
	//$("#line-nums").append('<div><label style="font-size: 75%;margin-bottom: 0px;' 
	//	+ 'padding-top: ' + (0 - paddingOffset) + 'px;">' + lineCount + '</label></div>');
	$("#line-nums").append("<div>" + lineCount + "    \n</div>");
	paddingOffset+=10;
	lineCount++;
}