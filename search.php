<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

include("connection.php");

$fullname =$_GET["fullname"];

$query = $mysqli->prepare("SELECT * FROM users WHERE fullname =?");
$query->bind_param('s' , $fullname);
$query->execute();
$array = $query->get_result();

$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;

?>