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
$companyname = ($data["companyname"]);
$result = mysqli_query($conn, "SELECT * FROM `companies` WHERE `CompanyName` = '$companyname'"); 

$rows = array();
  while($r = mysqli_fetch_array($result)) {
    $rows[] = $r;
  }

// echo json_encde($rows);

$company = $rows[0];

$newstars = $stars+$company['stars'];
$newrates = $company['rates']+1;

echo $newstars;
// echo $newrates;

$test = mysqli_query($conn, "UPDATE companies SET stars = '$newstars', rates = '$newrates' WHERE CompanyName = '$companyname'"); 

 
mysqli_close($conn);




?>