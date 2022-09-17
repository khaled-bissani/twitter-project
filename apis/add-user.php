<?php
include("connection.php");
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

$fullname = $_POST["fullname"];
$dob = $_POST["dob"];
$email = $_POST["email"];
$password = hash("sha256", $_POST["password"]);
$phonenumber = $_POST["phonenumber"];
$username = $_POST["username"];

$query = "INSERT INTO users(fullname, dob, email, password, phonenumber, username) VALUE (?, ?, ?, ?, ?, ?)";

$query = $mysqli->prepare("INSERT INTO users(fullname, dob, email, password, phonenumber, username) VALUE (?, ?, ?, ?, ?, ?)");
$query->bind_param("ssssss", $fullname, $dob, $email, $password, $phonenumber, $username);
$query->execute();

/*$response = [];
$response["success"] = true;
echo json_encode($response);*/


?>