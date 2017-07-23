<?php
	if (isset($_GET['id'])) {	// May not need to check for id. Will keep for now however.
		$id = $_GET['id'];
	} else {
		echo "id was empty <br>";	
		$id = "null";				
	}							

	if (isset($_GET['file_name'])) {
		$file_name = $_GET['file_name'];
	} else {
		echo "file_name was empty <br>";
		$file_name = "null";
	}

	$link = mysqli_connect("localhost", "root", "", "texteditor_db");
	if (!$link) {
		echo "didn't connect properly <br>";
	}

	$sql = "SELECT file_contents FROM files WHERE file_name = " . $file_name . ";";
	$result = msqli_query($link, $sql);

	if (!$result) {
		echo "didn't return a valid result <br>";
	} else {
		echo $result;
	}

	mysqli_free_result($result);
	mysqli_close($link);
?>