<?php
header("Access-Control-Allow-Origin: http://localhost:3000");  
header('Content-type:application/json;charset=utf-8');

$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'correcttrader';
$conn = mysqli_connect($host, $user, $pass, $db);
$data = json_decode(file_get_contents('php://input'), true); 
$username =($data["user"]);
$password = ($data["password"]);

$test = [
    'user' => $user,
    'password' => $password

];
$values = json_encode($test);
$status = null;
if ($data != null) {
    $query = sprintf("SELECT * FROM `users` WHERE `user` = '%s'", $username);
    if ($result = mysqli_query($conn, $query)) {
        if(mysqli_num_rows($result) > 0){
            $row = mysqli_fetch_assoc($result);
            if ($password === $row['password']) {
                $status = true;
				echo json_encode($status);
            }else{
                $status = false;
				echo json_encode($status);
            }
        }else{
            $status = null;
			echo json_encode($status);
        }
    }else{
		$status = null;
		echo json_encode($status);
		
    }

}
?>