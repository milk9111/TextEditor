<!DOCTYPE html>
<html>
<head>
	<style>
	table {
		width: 100%;
		border-collapse: collapse;
	}

	table, td, th {
		border: 1px solid black;
		padding: 5px;
	}

	th {
		text-align: left;
	}
	</style>
</head>

<body>
<?php

	$link = mysqli_connect("localhost", "robin", "", "company_db");
	if (!$link) {
		echo("Could not connect: " . mysqli_error($link));
	}

	$sql = "SELECT * FROM employees";
	$result = mysqli_query($link, $sql);

	if ($result == NULL) {
		echo("The result is null! <br/>");
	} else {
		echo("<table>
			<tr>
			<th>Employee ID</th>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Age</th>
			<th>Date</th>
			<th>Records</th>");

		while ($row = mysqli_fetch_array($result)) {
			echo "<tr>";
			echo "<td>" . $row['id'] . "</td>";
			echo "<td>" . $row['first_name'] . "</td>";
			echo "<td>" . $row['last_name'] . "</td>";
			echo "<td>" . $row['age'] . "</td>";
			echo "<td>" . $row['joined_date'] . "</td>";
			echo "<td>" . $row['records'] . "</td>";
			echo "</tr>";
		}
		echo "</table>";
		mysqli_free_result($result);
		mysqli_close($link);
	}

?>
</body>
</html>