<?php

	if (isset($_GET['id'])) {
		$id = $_GET['id'];
	} else {
		$id = NULL;
	}


	if (!$id) {
		echo "NULL";
	} else {
		$link = mysqli_connect("localhost", "root", "", "texteditor_db");
		if (!$link) {
			die("did not connect properly to localhost");
		}

		$sql = "SELECT file_name FROM files WHERE id = '" . $id . "'";

		$result = mysqli_query($link, $sql);

		while ($row = mysqli_fetch_array($result)) {
			/*echo '<button type="button" class="btn" onclick="loadText(' . $row['file_name'] . ')">' 
				. $row['file_name'] . "</button><br>";*/

			$response = array(
				'file_name' => $row['file_name']
			);
			header('Content-type: application/json');
			echo json_encode($response) . " ";
		}
	}
?>
