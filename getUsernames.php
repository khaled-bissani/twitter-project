<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include("connection.php");

$username = $_GET['username'];
//$password = $_POST['password'];

$query = $mysqli->prepare("SELECT * FROM users WHERE username = ? ");
$query->bind_param('s' , $username );
$query->execute();
$array = $query->get_result();

$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}
/*$success = false;
foreach ($response as $value) {
    echo $value;
}*/

$json = json_encode($response);
echo $json;

?>