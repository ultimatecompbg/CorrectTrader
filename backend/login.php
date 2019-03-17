<?php
header("Access-Control-Allow-Origin: http://localhost:3000");  
header('Content-type:application/json;charset=utf-8');

$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'users';
$conn = mysqli_connect($host, $user, $pass, $db);
$values = json_encode($test);
$data = json_decode(file_get_contents('php://input'), true); 
$user =($data["user"]);
$password = ($data["password"]);

$test = [
    'user' => $user,
    'password' => $password

];
$status = null;
if ($data != null) {
    $query = sprintf("SELECT * FROM `users` WHERE `user` = '%s'", $username);
    if ($result = mysqli_query($conn, $query)) {
        if(mysqli_num_rows($result) > 0){
            $row = mysqli_fetch_assoc($result);
            if ($password === $row['password']) {
                $status = true;
            }else{
                $status = false;
            }
        }else{
            $status = null;
        }
    }else{
		$status = null;
    }
}
?>