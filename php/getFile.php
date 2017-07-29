<?php
	if (isset($_GET['id'])) {	// May not need to check for id. Will keep for now however.
		$id = $_GET['id'];
	} else {
		//die ("id was empty <br>");	
		$id = "null";				
	}							

	if (isset($_GET['file_name'])) {
		$file_name = $_GET['file_name'];
	} else {
		//die ("file_name was empty <br>");
		$file_name = "null";
	}

	$link = mysqli_connect("localhost", "root", "", "texteditor_db");
	if (!$link) {
		//die ("didn't connect properly <br>");
	}

	$sql = "SELECT file_contents FROM files WHERE file_name = 'helloWorld'"; //'helloWorld' will need to be changed to $file_name
	$result = mysqli_query($link, $sql);

	if (!$result) {
		//die ("didn't return a valid result <br>");
		//echo $result;
	} else {
		$arr = mysqli_fetch_array($result);
		echo $arr['file_contents'];
	}

	mysqli_free_result($result);
	mysqli_close($link);
?>