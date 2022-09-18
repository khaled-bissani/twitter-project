<?php 

header("Access-Control-Allow-Origin: *");

include("connection.php");


define('UPLOAD_DIR', 'images/');
// foreach ($_REQUEST['image'] as $value)
$img = $_POST['image']; // Receive the image as a b64
$img = str_replace('data:image/jpeg;base64,', '', $img);
$data = base64_decode($img);
$file = UPLOAD_DIR . uniqid() . '.png';
$success = file_put_contents($file, $data);
$data1[] = $file;

$url = realpath("C:/xampp/htdocs/twitter/".$file);
$tweet_id = $_POST["tweetId"];

$query = $mysqli->prepare("INSERT INTO images(url, tweets_tweet_id) VALUE (?,?)");
$query->bind_param("si",$url ,$tweet_id);

$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>