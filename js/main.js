
var lineCount = 1;
var paddingOffset = 0;

$(document).ready(function(){
	addLineNum();
    $("#input").keydown(function(e) {
    	var editableID = document.getElementById("input");
	    var code = e.keyCode ? e.keyCode : e.which;
	    console.log("the code is " + code);
	    console.log("the preceding char is " + getCharacterPrecedingCaret(editableID).charCodeAt(0));
	    if (code == 13) {  // Enter keycode
	 		addLineNum();
	    } else if (getCharacterPrecedingCaret(editableID).charCodeAt(0) != 0 && code == 8 && getCharacterPrecedingCaret(editableID).charCodeAt(0) == 9) {
	    	console.log("in here");
	    	remLineNum();

	    }
	});
}); 


function getCharacterPrecedingCaret(containerEl) {
    var precedingChar = "", sel, range, precedingRange;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount > 0) {
            range = sel.getRangeAt(0).cloneRange();
            range.collapse(true);
            range.setStart(containerEl, 0);
            precedingChar = range.toString().slice(-1);
        }
    } else if ( (sel = document.selection) && sel.type != "Control") {
        range = sel.createRange();
        precedingRange = range.duplicate();
        precedingRange.moveToElementText(containerEl);
        precedingRange.setEndPoint("EndToStart", range);
        precedingChar = precedingRange.text.slice(-1);
    }
    return precedingChar;
}


function addLineNum() {
	$("#line-nums").append('<div id="L' + lineCount + '">' + lineCount + "</div>");
	lineCount++;
}

function remLineNum() {
	$("div").remove("#L" + (lineCount - 1));
	console.log("just tried to remove .L" + (lineCount - 1));
	console.log($("#line-nums").html() + " is the value");
	lineCount--;
	console.log("new lineCount is " + lineCount);
}

function saveText() {
	console.log("in the save text");
	var fileName = prompt("Enter a filename: ");
}

function loadText(event) {
	var file = event.target.files[0];    
	var reader = new FileReader();
    reader.onload = function(event2){
      console.log("loading the file");
      var content = event2.target.result;
      document.getElementById("theTextArea").value = event2.target.result;
    };
    reader.readAsText(file, "UTF-8");
}

/*document.getElementById("fileLoader").onchange = function(event) {
	var reader = new FileReader();

}*/






