<?php
// signup.php

require 'database.php';

$response = array();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the posted data
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $userType = $_POST['userType'];

    // Validate the data
    if (!empty($fullName) && !empty($email) && !empty($password) && !empty($userType)) {
        // Check if the email is already in use
        $query = "SELECT * FROM users WHERE email = :email";
        $stmt = $db->prepare($query);
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            $response['error'] = true;
            $response['message'] = 'Email already in use.';
        } else {
            // Insert the user into the database
            $query = "INSERT INTO users (full_name, email, password, user_type) VALUES (:fullName, :email, :password, :userType)";
            $stmt = $db->prepare($query);
            $passwordHash = password_hash($password, PASSWORD_DEFAULT);
            $stmt->bindParam(':fullName', $fullName);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':password', $passwordHash);
            $stmt->bindParam(':userType', $userType);
            $result = $stmt->execute();

            if ($result) {
                $response['success'] = true;
                $response['message'] = 'Signup successful.';
            } else {
                $response['error'] = true;
                $response['message'] = 'Signup failed.';
            }
        }
    } else {
        $response['error'] = true;
        $response['message'] = 'All fields are required.';
    }
} else {
    $response['error'] = true;
    $response['message'] = 'Invalid request.';
}

echo json_encode($response);