<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
include("connection.php");

$message = "";
if (count($_POST) > 0) {
    $isSuccess = 0;
    $username = $_POST['username'];
    $sql = "SELECT * FROM users WHERE username= ?";
    $statement = $mysqli->prepare($sql);
    $statement->bind_param('s', $username);
    $statement->execute();
    $result = $statement->get_result();
    while ($row = $result->fetch_assoc()) {
        if (!empty($row)) {
            $password = $row["password"];
            if (password_verify($_POST["password"], $password))
            {
                $isSuccess = 1;
            }
        }
    }
    if ($isSuccess == 0) {
        $message = "Invalid Username or Password!";
        echo $message;
    } else {
        //header("Location:  ./success-message.php");
        $message = "Login successful";
        echo $message;
    }
}

?>