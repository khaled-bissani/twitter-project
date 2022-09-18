<?php 

header("Access-Control-Allow-Origin: *");

include("connection.php");

$content = $_POST["content"];
$user_id = $_POST["userId"];

$query = $mysqli->prepare("INSERT INTO tweets(content, users_user_id) VALUE (?, ?)");
$query->bind_param("si", $content, $user_id);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);


?>