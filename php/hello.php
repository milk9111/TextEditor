<?php
	$link = mysqli_connect('localhost', 'robin', '', 'company_db');

	if (!$link) {
		$logMessage = 'MySQL Error: ' . mysqli_error($link);

		echo($logMessage);
		die('could not connect to the database');
	} else {
		echo('it worked!<br/>');
	}

	$query = "SELECT * FROM employees";
	echo('the query is ' . $query . '<br/>');

	$result = $link->query($query);
	$htmlString = "";

	if ($result == NULL) {
		echo('the result is null <br/>');
	} else {
		while ($row = mysqli_fetch_array($result)) {
			$htmlString = $htmlString . $row[0] . ': ' . $row[1] . ' ' . $row[2] . ' ' . $row[3] . ' ' . $row[4] . ' ' . $row[5] . '<br/>'; 
		}
	}

	echo($htmlString);

	mysqli_free_result($result);
	mysqli_close($link);
?>