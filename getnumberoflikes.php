<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

include("connection.php");

$query = $mysqli->prepare("SELECT tweets_tweet_id as tweet_id, COUNT(tweets_tweet_id) as nummber_of_likes FROM likes group by tweets_tweet_id;");
$query->execute();
$array = $query->get_result();

$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;

?>