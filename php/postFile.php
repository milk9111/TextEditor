<?php

	if (isset($_GET['id'])) {
		$id = $_GET['id'];
	} else {
		echo "id was empty <br>";	// Here we are checking if the id part of the sent
		$id = "null";				// xml request is set, if not then "null" is the default
	}								// value.

	if (isset($_GET['file_name'])) {
		$file_name = $_GET['file_name'];
	} else {
		echo "file_name was empty <br>";
		$file_name = "null";
	}

	if (isset($_GET['file_contents'])) {
		$file_contents = $_GET['file_contents'];
	} else {
		echo "file_contents was empty <br>";
		$id = "null";
	}

	echo $id . " " . $file_name . " " . $file_contents . "<br>";

	$link = mysqli_connect("localhost", "root", "", "texteditor_db");
	if (!$link) {
		die("couldn't connect to database");
	}

	$sql = "INSERT INTO files (id, file_name, file_contents) VALUES ('" . $id . "', '" . 
		$file_name . "', '" . $file_contents . "')";

	$result = mysqli_query($link, $sql);

	if ($result) {
		die ("it worked!");
	} else {
		die ("it didn't work");
	}

	mysqli_free_result($result);
	mysqli_close($link);


	// For testing we are using GET. This will be changed back to POST
	// once the database functionality is working.

	/*if (isset($_POST['id'])) {
		$id = $_POST['id'];
	} else {
		echo "id was empty <br>";
		$id = "null";
	}

	if (isset($_POST['file_name'])) {
		$file_name = $_POST['file_name'];
	} else {
		echo "file name was empty<br>";

		$file_name = "null";
	}

	if (isset($_POST['file_contents'])) {
		$file_contents = $_POST['file_contents'];
	} else {
		echo "file contents was empty<br>";

		$file_contents = "null";
	}*/
?>

