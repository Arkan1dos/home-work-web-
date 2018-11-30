<html>
<head>
    <link rel="stylesheet" href="css1.css">
</head>
<body>
<p><h1>Admin page</h1></p>

<?php
	$host = 'localhost';
	$user='root';
	$password = 'root';
	$db = 'task10';
	$conn = mysqli_connect($host,$user,$password,$db);
	$conn_error = mysqli_connect_error();
	if ($conn_error != null){echo $conn_error;}
	?>
	<form action="task3.php">
		Maker:<input type="text" name="maker"></br>
		Model:<input type="text" name="model"></br>
		Price:   <input type="number" name="price"></br>
		Year:      <input type="number" name="year"></br>
		URL:     <input type="text" name="url"></br>
	<input type="submit" name="submit"></br>
	</form>
	<?php
	$query="SELECT * FROM `cars`;";
	$results = mysqli_query($conn, $query);
	$last_id=mysqli_num_rows($results);
	if (isset($_GET['maker'])){
		$id=$last_id+1;
		$maker=$_GET['maker'];
		$model=$_GET['model'];
		$price=$_GET['price'];
		$year=$_GET['year'];
		$url=$_GET['url'];
		$query2="INSERT INTO `cars` (`id`, `maker`, `model`, `price`, `year`, `url`) VALUES ('$id', '$maker', '$model', '$price', '$year', '$url');";
		if (mysqli_query($conn, $query2)) {echo "New record created successfully";}
		else {echo "there is error: ".mysqli_error($conn);}
	}
?>
<form action="task3.php">
    <button>Check the list</button>
</form>
<?php
	while ($row = mysqli_fetch_array($results)) {
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
