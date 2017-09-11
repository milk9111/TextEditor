document.getElementById("fileLoader").onchange = function() {
	var file = document.getElementById("fileLoader").files[0];
	var fileReader = new FileReader();
	fileReader.onload = function (e) {
		var text = e.target.result;
		document.getElementById("myText").value = text;
	}

	fileReader.readAsText(file, "UTF-8");
};
