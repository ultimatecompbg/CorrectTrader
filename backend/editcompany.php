<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Content-type:application/json;charset=utf-8');

$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'correcttrader';
$conn = mysqli_connect($host, $user, $pass, $db);
$data = json_decode(file_get_contents('php://input'), true);
$oldcompanyname = ($data["companyname"]);
/*$result = mysqli_query($conn, "SELECT * FROM `companies` WHERE `CompanyName` = '$oldcompanyname'");

$rows = array();
while ($r = mysqli_fetch_array($result)) {
    $rows[] = $r;
}

// echo json_encde($rows);

$company = $rows[0];*/
$location = $data["location"];
$description = $data["description"];
$imagelink = $data["imagelink"];
$category = $data["category"];

mysqli_query($conn, "UPDATE companies SET location = '$location', description = '$description', imagelink = '$imagelink', category = '$category' WHERE companyname = '$oldcompanyname'");
