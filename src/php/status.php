<?php
session_start();
require_once 'connect.php';

if (isset($_POST['handleBtn'])) {
  $client_id = $_POST['identificator'];
  $request_status = $_POST['status'];
  mysqli_query($connect, "UPDATE `user-requests` SET `status` = '$request_status' WHERE `id` = '$client_id'");
}

if (isset($_POST['closeBtn'])) {
  $client_id = $_POST['identificator'];
  $request_status = $_POST['status'];
  mysqli_query($connect, "UPDATE `user-requests` SET `status` = '$request_status' WHERE `id` = '$client_id'");
}

echo "$request_status";

mysqli_close($connect);

header('Location: requests.php');
