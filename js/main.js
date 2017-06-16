
var lineCount = 1;
var paddingOffset = 0;

$(document).ready(function(){
	
	console.log("got here");
	addLineNum();
	var e = $.Event("keydown");
	e.which = 13;
	$("#input").val("<br>&nbsp");
	console.log($("#input").val());
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
	$("#line-nums").append("<div>" + lineCount + "</div>");
	paddingOffset+=10;
	lineCount++;
}

function saveText() {
	console.log("in the save text");
	var fileName = prompt("Enter a filename: ");
}

function loadText(event) {
	var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
    };
}