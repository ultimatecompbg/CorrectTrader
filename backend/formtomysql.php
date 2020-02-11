<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Content-type:application/json;charset=utf-8');

$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'correcttrader';
$conn = mysqli_connect($host, $user, $pass, $db);
$values = json_encode($test);
$data = json_decode(file_get_contents('php://input'), true);
$companyname = ($data["companyname"]);
$companyowner = ($data["companyowner"]);
$location = ($data["location"]);
$description = ($data["description"]);
$imagelink = ($data["imagelink"]);
$category = ($data["category"]);

$test = [
	'location' => $location,
	'companyname' => $companyname,
	'description' => $description,
	'imagelink' => $imagelink,
	'category' => $category
];
$check = "SELECT * FROM `companies` WHERE `companyname` = '$companyname'";
$companycheck = mysqli_query($conn, $check);
if ($data == null) {
} else {
	if (mysqli_num_rows($companycheck) == 0) {
		$transfer = "INSERT INTO Companies (Location, CompanyName, CompanyOwner, Description, ImageLink, Category)
VALUES ('$location', '$companyname', '$companyowner', '$description', '$imagelink', '$category')";
		mysqli_query($conn, $transfer);
	}
}
