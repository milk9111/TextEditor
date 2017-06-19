
var lineCount = 1;
var paddingOffset = 0;

$(document).ready(function(){
	addLineNum();
  $("#input").text("this is the start");
  $("#input").keydown(function(e) {
  	var editableID = document.getElementById("input");
    var code = e.keyCode ? e.keyCode : e.which;
    //console.log("the code is " + code);
    //console.log("the preceding char is " + getCharacterPrecedingCaret(editableID).charCodeAt(0));
    if (code == 13) {  // Enter keycode
 		addLineNum();
    } else if (code == 8 && window.getSelection().focusOffset == 0) { //looks for backspace
    	//console.log("in here");
    	remLineNum();

    }
	});
}); 


function getCaretPosition() {
  console.log(window.getSelection());
  var caretPos = window.getSelection().anchorOffset;
  return caretPos;
}


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
	lineCount--;
}

function saveText() {
	console.log("in the save text");
	var fileName = prompt("Enter a filename: ");

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

    }
  };
  xhttp.open("POST", fileName, true);
  xhttp.send($("#input").text());
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






