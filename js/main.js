
var lineCount = 1;
var paddingOffset = 0;

$(document).ready(function(){
  console.log("in here");
	addLineNum();

  $("#input").text("this is the start");
  $("#input").keydown(function(e) {
  	var editableID = document.getElementById("input");
    var code = e.keyCode ? e.keyCode : e.which;
    var size = window.getSelection().anchorOffset - window.getSelection().focusOffset;

    if (code == 13) {  // Enter keycode
      addLineNum();

    // This conditional is checking if a backspace was pressed, the cursor is at the
    // beginning of the current line, and that the line is only removed when a backspace
    // is pressed on the first position in the line. The size is used to check that backspace
    // was not pressed on a block of selected text in this line only. If so, then don't delete
    // it.
    } else if (code == 8 && window.getSelection().focusOffset == 0 && size == 0) { 
      if (lineCount != 2) {
        console.log("in here " + lineCount);
        remLineNum();
      }
    }
    
	});
}); 


function getCaretPosition() {
  //console.log(window.getSelection());
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
  $("#input").append(String.fromCharCode(160));
  console.log($("#input").text());
	$("#line-nums").append('<div id="L' + lineCount + '">' + lineCount + "</div>");
	lineCount++;
}

function remLineNum() {
	$("div").remove("#L" + (lineCount - 1));
	lineCount--;
}

/*document.getElementById("fileLoader").onchange = function(event) {
	var reader = new FileReader();

}*/






