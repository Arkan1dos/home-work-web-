<html>
<head>
    <link rel="stylesheet" href="css.css">
</head>
<body>
<?php
	$host = 'localhost';
	$user='root';
	$password = 'root';
	$db = 'task10';
	$conn = mysqli_connect($host,$user,$password,$db);
	$conn_error = mysqli_connect_error();
	if ($conn_error != null)
	{
		echo "Error:<p>  $conn_error </p>";
	}
	$query="SELECT * FROM `cars`;";
	$results = mysqli_query($conn, $query);
	while ($row = mysqli_fetch_array($results)) 
	{
		echo "<div class='car'>";
		echo "<img src=".$row['url'].">";
		echo "<div class='opis'>";
		echo "<b>".$row['maker']." ".$row['model']."</b>";
		echo "<p>".$row['price']."</p>";
		echo $row['year']." year ";
		echo "</div>";
		echo "</div>";
	}
	mysqli_close($conn);
?>
</body>
</html>