<html>
<body>
<?php
if (isset($_GET['name']))
{
    setcookie("username", $_GET['name']);
    echo "Hello, ".$_GET["name"]." !";
}
else
{
    echo "<form action=\"task1.php\">
    Enter your name <input type=\"text\" name=\"name\">
    <input type=\"submit\">
</form>";
}
?>
</body>
</html>