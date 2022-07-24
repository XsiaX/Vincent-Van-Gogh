<?php
session_start();
require_once 'connect.php';

$clientName = filter_var(
  trim($_POST['customerName']),
  FILTER_SANITIZE_STRING
);

$clientPhone = filter_var(
  trim($_POST['customerPhone']),
  FILTER_SANITIZE_NUMBER_INT
);

$museum = $_POST['museum'];

$callTime = $_POST['callTime'];

$status = 'NEW';

//Добавляем данные в БД
mysqli_query($connect, "INSERT INTO `user-requests` (`name`, `phone`, `museum`, `date`, `status`) 
  VALUES('$clientName', '$clientPhone', '$museum', '$callTime' , '$status')");

mysqli_close($connect);

header('Location: ../index.html');
