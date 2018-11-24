<a href="task2.php?category=sport">Sport news</a> | <a href="task2.php?category=politics">Politic news</a>
<br/><br/>
<a href="task2.php?category=sport&format=json">Sport news (JSON)</a> | <a href="task2.php?category=politics&format=json">Politic news (JSON)</a>
<br/><br/>

<?php
$n = ["sport"=>["C. Ronaldo has scored three goals in last five matches","Golovkin has won match for title"],"politics"=>["Trump has cancelled his visit to North Corea, because of sanction","N. Nazarbayev has approved new version of alphabet"]];
$c = "sport";
$f = "";
if(isset($_GET["format"])){
	$f = $_GET["format"];
}
if(isset($_GET["category"])){
	$c = $_GET["category"];
}
if($format == "json"){
	echo json_encode($n[$category]);
}
else{
	echo $n[$c][0]. "</br>". $[$c][1];
}