<?php
	if (isset($_GET['id'])) {
		$id = intval($_GET['id']);
	} else {
		$id = 4;
	}

	if (isset($_GET['first'])) {
		$first = $_GET['first'];
	} else {
		$first = "mayor";
	}

	if (isset($_GET['last'])) {
		$last = $_GET['last'];
	} else {
		$last = "bloomberg";
	}

	$link = mysqli_connect("localhost", "robin", "", "company_db");

	if (!$link) {
		echo "Couldn't connect to database " . mysqli_error($link);
	}

	$sql = "INSERT INTO employees (id, first_name, last_name) VALUES (" . $id . ", '" 
		. $first . "', '" . $last . "')";

	//$result = mysqli_query($link, $sql);

	if ($link->query($sql) === TRUE) {
		die ("New record created successfully");
	} else {
		die ("Error: " . $sql . "<br/>" . $link->error);
	}

	//echo $id . " " . $first . " " . $last;
	mysqli_free_result($result);
	mysqli_close($link);
?>