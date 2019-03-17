<?php
header("Access-Control-Allow-Origin: http://localhost:3000");  
header('Content-type:application/json;charset=utf-8');

$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'correcttrader';
$conn = mysqli_connect($host, $user, $pass, $db);
$data = json_decode(file_get_contents('php://input'), true); 
$stars =($data["stars"]);
$rates = ($data["rates"]);
$companyname = ($data["companyname"]);


    $oldstars = mysqli_query($conn, "SELECT * FROM `stars` WHERE `CompanyName` = $companyname"); 
	$oldrates = mysqli_query($conn, "SELECT * FROM `rates` WHERE `CompanyName` = $companyname"); 
	
    


$newstars = $stars+$oldstars;
$newrates = $rates+$oldrates;







	
$test = mysqli_query($conn, "UPDATE companies SET stars = '$newstars', rates = '$newrates' WHERE CompanyName = '$companyname'"); 
 
mysqli_close($conn);




?>