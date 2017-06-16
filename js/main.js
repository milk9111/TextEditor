
var lineCount = 1;
var paddingOffset = 0;

$(document).ready(function(){
	addLineNum();
    $("#input").keydown(function(e) {
	   var code = e.keyCode ? e.keyCode : e.which;
	   if (code == 13) {  // Enter keycode
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