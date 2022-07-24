<?php
session_start();
require_once 'connect.php';

$operatorLogin = filter_var(
  trim($_POST['operatorLogin']),
  FILTER_SANITIZE_STRING
);

$operatorPass = filter_var(
  trim($_POST['operatorPassword']),
  FILTER_SANITIZE_STRING
);

$check_operator = mysqli_query($connect, "SELECT * FROM operators WHERE login = '$operatorLogin' AND password = '$operatorPass'");

if (mysqli_num_rows($check_operator) > 0) {

  $operator = mysqli_fetch_assoc($check_operator);

  $_SESSION['operator'] = [
    "id" => $operator['id'],
    "login" => $operator['login'],
    "password" => $operator['password'],
  ];

  mysqli_close($connect);

  header('Location: requests.php');
} else {
  $_SESSION['message'] = 'Логин или пароль неверен!';
  header('Location: error-auth.php');
}
