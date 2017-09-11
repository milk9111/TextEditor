
/*
	This will control the buttons that appear on the "Available Files" popup
	for the user to choose. It does so by pulling all files made by the current
	user, and displaying them as buttons with an event listener attached that will 
	then open up the chosen file into the editor. (does not display format correctly)

	author: Connor Lundberg
	date: 8/9/2017
*/
function showFiles(theId) {
    xhttp = new XMLHttpRequest();
    $('#myPopup').html("");
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //Because the showFiles.php echoes the json objects as one long 
        //string with spaces separating them (and it can't be parsed like that),
        //this will split the string on the space so we have an array of strings 
        //now. Probably not the best way to do this, but it should work for now.
        var res = this.response.split(" ");

        var jsonObjects = []; //sets json array
        var length = res.length - 1; //the length of res minus the empty at the end
        var currIndex = 0;

        for (var i = 0; i < res.length; i++) {
          var curr = JSON.stringify(res[i]);
          res[i] = "" + res[i];
          var json;
          if (res[i] != "") {
            json = JSON.parse(res[i]);
            var str = "" + i;
            jsonObjects[currIndex] = json;
            currIndex++;
          }
          
        }

        //Here the button html is created and given an event listener that, once
        //clicked, will activate an internal function which simply calls the loadText.
        for (var i = 0; i < length; i++) {
          var htmlStr = '<button type="button" id="' + jsonObjects[i].file_name + '">' 
            + jsonObjects[i].file_name + '</button>';
          $("#myPopup").append(htmlStr);
          document.getElementById(jsonObjects[i].file_name).addEventListener("click", 
            function(event) {
              loadText(this.id);
            }, false);
        }
      }
    }

    xhttp.open("GET", "../php/showFiles.php?id=" + theId);
    xhttp.send();
    var popup = document.getElementById('myPopup');
    popup.classList.toggle("show");
  }


 /*
  This will load the selected file from the cloud and open it onto the editor.

  author: Joe Fried, Connor Lundberg
  date: 7/23/2017
*/
function loadText (fileName) {
  var xhttp = new XMLHttpRequest();
  //Once the request has been finished (that is, the PHP script is completed) this function
  //will be called. The readyState and status are used to make sure that the request was
  //successful (200 and 4 are good. For perspective, think of error 404 if that helps to
  //understand it).
  xhttp.onreadystatechange = function () { 
    if (this.readyState == 4 && this.status == 200) {
    	printAllChars(this.responseText);
    	//var outputString = reformat(this.responseText);
    	var outputString = this.responseText;
    	printAllChars(outputString);
    	outputString = outputString.replace(/\n/gi, "<br/>");
    	$("#input").html(outputString);
    	printAllChars($("#input").html());
    }
  }

  xhttp.open("GET", "../php/getFile.php?file_name=" + fileName);
  xhttp.send();
}


function printAllChars (stringToPrint) {
	for (var i = 0; i < stringToPrint.length; i++) {
		console.log(stringToPrint.charAt(i) + ": " + stringToPrint.charCodeAt(i));
	}
}


function reformat (stringToFormat) {
	var formatedString = "";
	//I'm sure there's a better way to do this, but I'm going this route
	//just to test that it's working.
	for (var i = 0; i < stringToFormat.length; i++) {
		if (stringToFormat.charCodeAt(i) == 160) {
			formatedString += "<br>";
		} else {
			formatedString += stringToFormat.charAt(i);
		}
	}

	return formatedString;
}