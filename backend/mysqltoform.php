<?php
header("Access-Control-Allow-Origin: http://localhost:3000");  
header('Content-type:application/json;charset=utf-8');

$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'correcttrader';
$conn = mysqli_connect($host, $user, $pass, $db);

 $result = mysqli_query($conn,"SELECT * FROM Companies");

  $rows = array();
  while($r = mysqli_fetch_array($result)) {
    $rows[] = $r;
  }
  echo json_encode($rows);

mysqli_close($conn);





?> 