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
$user =($data["user"]);
$password = ($data["password"]);

$test = [
    'username' => $password,
    'password' => $password,
];
if($data == null){}else{
$transfer = "INSERT INTO Users (User, Password)
VALUES ('$user', '$password')";
mysqli_query($conn,$transfer);
}
?>