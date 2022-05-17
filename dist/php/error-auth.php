<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ошибка</title>
  <style>
    .wrapper {
      padding-top: 150px;
    }

    .container {
      max-width: 800px;
      padding: 150px 30px;
      margin: 0 auto;
      background: url("../assets/img/css-backgrounds/auth_bg.jpg");
      background-size: cover;
      border-radius: 8px;
    }

    .row {
      width: 80%;
      margin: 0 auto;
      background: rgba(0, 0, 0, 0.461);
      border-radius: 8px;
      padding: 100px 25px;
      text-align: center;
    }

    .message {
      font-size: 24px;
      font-weight: 600;
      color: #fff;
      margin-bottom: 20px;
      font-size: 30 px;
    }

    .back {
      color: #fff;
      width: 100%;
      height: 35px;
      border-radius: 8px;
      text-decoration: none;
      font-size: 20px;
    }

    .back:hover {
      text-decoration: underline;

    }
  </style>
</head>

<body>
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="message"> <?= $_SESSION['message'] ?></div>
        <a href="../auth.html" class="back">Вернуться назад к авторизации</a>
      </div>
    </div>
  </div>
</body>

</html>