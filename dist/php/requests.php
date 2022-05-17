<?php
session_start();
require_once 'connect.php';

if (!empty($_SESSION['operator'])) {
  if ($_SESSION['operator']['login'] == 'operator_sam_morgan' && $_SESSION['operator']['password'] == 'operator1_morgan') {
    $check_clients = mysqli_query($connect, "SELECT `id`, `name`, `phone`, `museum`, `date`, `status` FROM `user-requests` WHERE `id` % 2 = 1");
  }

  if ($_SESSION['operator']['login'] == 'operator_sia_jeon'  && $_SESSION['operator']['password'] == 'operator2_jeon') {
    $check_clients = mysqli_query($connect, "SELECT `id`, `name`, `phone`, `museum`, `date`, `status` FROM `user-requests` WHERE `id` % 2 = 0");
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,400;0,800;0,900;1,400&display=swap">
  <title>Заявки</title>

  <style>
    body {
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      font-size: 17px;
      color: #696871;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .wrapper {
      min-height: 100vh;
      background: url('../assets/img/css-backgrounds/auth_bg_full.jpg') no-repeat 0 0;
      background-size: cover;
      margin: 0 auto;
      padding: 0 25px;
      box-sizing: content-box;
    }

    ._container {
      background: rgba(0, 0, 0, 0.461);
      border-radius: 8px;
      max-width: 1170px;
      margin: 0 auto;
      padding: 0 15px;
      box-sizing: content-box;
    }

    .title {
      font-size: 30px;
      padding-top: 15px;
      text-align: center;
    }

    .page__students {
      flex: 1 1 auto;
    }

    .learn-table {
      padding: 60px 15px;
    }

    table {
      text-align: center;

    }

    .learn-table tr th,
    .learn-table tr td {
      text-align: center;
      width: 450px;
      border-radius: 3px;

    }

    .learn-table tr th {
      color: #fff;
      padding: 15px;
      background-color: #5C4353;
    }

    .learn-table tr td {
      font-size: 15px;
      padding: 10px;
      color: black;
      background-color: #CFD1DF;
    }

    .btn {
      border: none;
      border-radius: 8px;
      height: 30px;
      width: 90px;
      background-color: #C3B3DB;
      text-transform: uppercase;
      transition: 0.3s;
    }

    .btn:hover {
      background-color: #7F5D85;
      box-shadow: 5px 2px 5px rgba(0, 0, 0, 0.461);
    }

    .adapter {
      visibility: hidden;
    }
  </style>
</head>

<body>
  <div class="wrapper">
    <main class="page__students students">
      <div class="students__container _container">
        <div class="title">Клиентская база</div>
        <div class="learn-table">
          <table>
            <tr>
              <th>ID</th>
              <th>Имя</th>
              <th>Музей</th>
              <th>Дата</th>
              <th>Статус</th>
              <th>Обработать</th>
              <th>Закрыть</th>
            </tr>
            <?php

            if (mysqli_num_rows($check_clients) > 0) {
              $clients_data = array();

              while ($client = mysqli_fetch_assoc($check_clients)) {
                $clients_data[] = $client;
              }

              foreach ($clients_data as $clients_number => $clients_array) {
                echo "<tr>";
                foreach ($clients_array as $clients_property => $clients_value) {

                  if ($clients_property) {

                    if ($clients_property == 'id') {
                      echo "<td class='clients__id'>" . $clients_value . "</td>";
                    };

                    if ($clients_property == 'name') {
                      echo "<td class='clients__name'>" . $clients_value . "</td>";
                    };

                    if ($clients_property == 'museum') {
                      echo "<td class='clients__museum'>" . $clients_value . "</td>";
                    };

                    if ($clients_property == 'date') {
                      echo "<td class='clients__date'>" . $clients_value . "</td>";
                    }

                    if ($clients_property == 'status') {
                      echo "<td class='clients__status'>" . $clients_value . "</td>";
                    }
                  }
                }

                echo "<td class='handle-button__parent'> <button class='handleBtn btn' name='btn'> Process </button> </td>";
                echo "<td class='close-button__parent'> <button class='closeBtn btn ' name='btn'> Close </button> </td>";
                echo "</tr>";
              }
            }
            ?>
          </table>
        </div>
      </div>
    </main>
  </div>

  <script>
    const requestStatus = document.querySelectorAll(".clients__status");
    const handleBtn = document.querySelectorAll(".handleBtn");
    const closeBtn = document.querySelectorAll(".closeBtn");

    handleBtn.forEach((button) => {
      button.addEventListener("click", (e) => {
        button.closest(".handle-button__parent").previousElementSibling.textContent = "INPROGRESS";
      })
    })

    closeBtn.forEach((button) => {
      button.addEventListener("click", (e) => {
        button.closest(".close-button__parent").previousElementSibling.previousElementSibling.textContent = "CLOSED";
        adapter.value = 10;
      })
    })
  </script>
</body>

</html>