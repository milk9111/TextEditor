
/*
  This will save the text using the user ID and the file contents given. 
  It prompts for a file name then checks that said file name does contain 
  a file extension. It doesn't matter what the extension is, so long as there is one.
  If an extension is not given, the default will be .txt. 

  author: Connor Lundberg
  date: 7/23/2017
*/
function saveText(theId, file_contents) {
  var file_name = prompt("Enter a file name (with extension): ");
  /*if (!hasExtension(file_name)) {
    file_name = file_name + ".txt";
  }*/
  //console.log(file_name);

  var xhttp = new XMLHttpRequest();

  console.log(theId);
  console.log(file_name);
  console.log(file_contents);
  
  printAllChars(file_contents);

  var result = xhttp.open("POST", "../php/postFile.php?id=" + theId + "&file_name=" + file_name
   + "&file_contents=" + file_contents);

  
  xhttp.send();
}


function printAllChars (stringToPrint) {
  for (var i = 0, len = stringToPrint.length; i < len; i++) {
    console.log(stringToPrint[i] + ": " + stringToPrint.charCodeAt(i));
  }
}


/*
  This will check for an extension on the file name. If one is there it will
  return true, false otherwise.

  author: Connor Lundberg
  date: 7/23/2017
*/
function hasExtension(fileName) {
  var result = false;

  if (fileName.includes(".")) {
    result = true;
  }

  return result;
}







/*function loadText() { //this will need to take a parameter called 'event'.
  var fileName = prompt("Enter file name to open");

  var xhttp = new XMLHttpRequest();

  //Once the request has been finished (that is, the PHP script is completed) this function
  //will be called. The readyState and status are used to make sure that the request was
  //successful (200 and 4 are good. For perspective, think of error 404 if that helps to
  //understand it).
  xhttp.onreadystatechange = function () { 
    if (this.readyState == 4 && this.status == 200) {
      $("#input").text(this.responseText);
    }
  }

  xhttp.open("GET", "../php/getFile.php?file_name=" + fileName);
  xhttp.send();

	/*var file = event.target.files[0];    
	var reader = new FileReader();
    reader.onload = function(event2){
      console.log("loading the file");
      var content = event2.target.result;
      document.getElementById("theTextArea").value = event2.target.result;
    };
    reader.readAsText(file, "UTF-8");
}*/