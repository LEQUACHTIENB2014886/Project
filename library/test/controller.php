<?php
$servername = "localhost";
$dbname = "webhocnhacly";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        $username = $_GET['username'];
        $password = $_GET['password'];
        $sql = "SELECT username, password FROM users WHERE username = :username AND password = :password";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $password);
        $stmt->execute();

        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($result) {
            $usernameFromDB = $result['username'];
            $usernameFromDB = $result['password'];
            echo "Username from the database: " . $usernameFromDB;
        } else {
            echo "No matching username found in the database.";
        }
    } else {
        echo "Not a GET request.";
    }
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>