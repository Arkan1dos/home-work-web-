<html>
<body>
<?php
$cars = [["id"=>1,"maker"=>"Toyota","model"=>"Camry 50","price"=>30000],["id"=>2,"maker"=>"Mercedes","model"=>"C 100","price"=>20000],["id"=>3,"maker"=>"Daewoo","model"=>"Nexia","price"=>15000],["id"=>4,"maker"=>"Mercedes","model"=>"S 500","price"=>27000]];
$basket = [];
$set=isset($_COOKIE["basket"]);
if ($set){
    $basket = json_decode($_COOKIE["basket"]);
}
foreach ($cars as $car){
    echo $car['maker']." ".$car['model'];
    if (in_array($car['id'],$basket)){
        echo "Already added<br>";
    }
    else{
        echo "<a href='task2_2.php?id=".$car['id']."'>Add to the busket</a><br>";
    }
}
echo "<br>";
if ($set){
    echo "<b>IN BASKET</b><br>";
    foreach ($basket as $b){
        echo $b.",";
    }
}
?>
</body>
</html>