<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Content-type:application/json;charset=utf-8');

$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'correcttrader';
$conn = mysqli_connect($host, $user, $pass, $db);
$data = json_decode(file_get_contents('php://input'), true);
$username = ($data["user"]);
$password = ($data["password"]);

$status = "";
if ($data != "") {
    $query = sprintf("SELECT * FROM `users` WHERE `user` = '%s'", $username);
    if ($result = mysqli_query($conn, $query)) {
        if (mysqli_num_rows($result) > 0) {
            $row = mysqli_fetch_assoc($result);
            if ($password === $row['password']) {
                $status = "User";
                if ($password === "begemaster") {
                    $status = "Admin";
                }
            }
        }
    }
}

echo json_encode($status);
