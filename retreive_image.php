<?php

include("connection.php");

$currentuser=$_POST['currentuser'];

$query = $mysqli -> prepare("SELECT s.url from users as u, images as s, tweets as t
where u.user_id=(SELECT user_id from users where username='".$currentuser."') and t.users_user_id = u.user_id and s.tweets_tweet_id=t.tweet_id");

$query -> execute();

$array = $query -> get_result();
$response = [];

while($a = $array -> fetch_assoc()) {
    $response[]=$a;
}

$json = json_encode($response);

// Remove all the extra slashes in the url
function stripslashesFull($input)
{
    if (is_array($input)) {
        $input = array_map('stripslashesFull', $input);
    } elseif (is_object($input)) {
        $vars = get_object_vars($input);
        foreach ($vars as $k=>$v) {
            $input->{$k} = stripslashesFull($v);
        }
    } else {
        $input = stripslashes($input);
    }
    return $input;
}

$url = stripslashesFull($json);
echo $url;
?>