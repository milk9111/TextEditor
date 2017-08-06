

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

        for (var i = 0; i < length; i++) {
          var htmlStr = '<button type="button" id="' + jsonObjects[i].file_name + '">' 
            + jsonObjects[i].file_name + '</button>';
          $("#myPopup").append(htmlStr);
          document.getElementById(jsonObjects[i].file_name).addEventListener("click", 
            function(event) {
              loadText(this.id);
            }, false);

          /*var element = document.createElement("input");
          var load = loadText(jsonObjects[i].file_name);

          element.type = "button";
          element.value = jsonObjects[i].file_name;
          element.id = jsonObjects[i].file_name;
          element.onclick = load;
          $("#myPopup").append(element);*/
        }
        //var val = JSON.parse(this.response);
        //console.log(val);
        //$('#myPopup').html(this.responseText); //if this doesn't work use .append()
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
  console.log(fileName);
  var xhttp = new XMLHttpRequest();
  //Once the request has been finished (that is, the PHP script is completed) this function
  //will be called. The readyState and status are used to make sure that the request was
  //successful (200 and 4 are good. For perspective, think of error 404 if that helps to
  //understand it).
  xhttp.onreadystatechange = function () { 
    if (this.readyState == 4 && this.status == 200) {
      console.log("the responseText is " + this.responseText);
      $("#input").text(this.responseText);
    }
  }

  xhttp.open("GET", "../php/getFile.php?file_name=" + fileName);
  xhttp.send();
}