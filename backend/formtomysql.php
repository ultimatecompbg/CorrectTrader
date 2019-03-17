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
$companyname =($data["companyname"]);
$location = ($data["location"]);
$description =($data["description"]);
$imagelink = ($data["imagelink"]);
$category = ($data["category"]);

$test = [
    'location' => $location,
    'companyname' => $companyname,
	'description' => $description,
	'imagelink' => $imagelink,
	'category' => $category
];
if($data == null){}else{
$transfer = "INSERT INTO Companies (Location, CompanyName, Description, ImageLink, Category)
VALUES ('$location', '$companyname', '$description', '$imagelink', '$category')";
mysqli_query($conn,$transfer);
}
?>