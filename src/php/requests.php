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

    .exit-btn {
      margin-top: 20px !important;
      text-align: center;
      display: block;
      text-decoration: none;
      font-size: 24px;
      color: #CFD1DF;
      background-image: linear-gradient(#7F5D85, #7F5D85);
      width: 200px;
      margin: 0 auto;
      border-radius: 8px;
      padding: 5px;
      height: 35px;
      transition: 0.3s;
      background-size: 0 100%;
      background-repeat: no-repeat;
    }

    .exit-btn:hover {
      color: #CFD1DF;
      background-size: 100% 100%;
    }
  </style>
</head>

<body>
  <div class="wrapper">
    <main class="page__students students">
      <div class="students__container _container">
        <div class="title">Клиентская база</div>
        <div class="learn-table">
          <form action="status.php" method="post">
            <table>
              <tr>
                <th>ID</th>
                <th>Имя</th>
                <th>Телефон</th>
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
                  echo "<tr class='table__row'>";
                  foreach ($clients_array as $clients_property => $clients_value) {

                    if ($clients_property) {

                      if ($clients_property == 'id') {
                        echo "<td class='clients__id'>" . "<input type='radio' style='visibility: hidden' name='identificator' id='identity' value='$clients_value' />" . "<label class='radio-label' for='identity'>" . $clients_value . "</label>" . "</td>";
                      };

                      if ($clients_property == 'name') {
                        echo "<td class='clients__name'>" . $clients_value . "</td>";
                      };

                      if ($clients_property == 'phone') {
                        echo "<td class='clients__phone'>" . $clients_value . "</td>";
                      };

                      if ($clients_property == 'museum') {
                        echo "<td class='clients__museum'>" . $clients_value . "</td>";
                      };

                      if ($clients_property == 'date') {
                        echo "<td class='clients__date'>" . $clients_value . "</td>";
                      }

                      if ($clients_property == 'status') {
                        echo "<td class='clients__status'>" . "<input type='radio' style='visibility: hidden' name='status' id='status' value='$clients_value' />" . "<label class='radio-label' for='status'>" . $clients_value . "</label>" . "</td>";
                      }
                    }
                  }

                  echo "<td class='handle-button__parent'> <button class='handleBtn' type='submit' name='handleBtn'> Process </button> </td>";
                  echo "<td class='close-button__parent'> <button class='closeBtn' type='submit' name='closeBtn'> Close </button> </td>";
                  echo "</tr>";
                }
              }
              ?>
            </table>
          </form>
          <a href="exit.php" class="exit-btn">Выйти</a>
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
        button.closest(".handle-button__parent").previousElementSibling.firstElementChild.checked = true;
        button.closest(".handle-button__parent").previousElementSibling.firstElementChild.value = "INPROGRESS";
        button.closest(".handle-button__parent").previousElementSibling.lastElementChild.textContent = "INPROGRESS";
        button.closest(".table__row").firstElementChild.firstElementChild.checked = true;
      })
    })

    closeBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        btn.closest(".close-button__parent").previousElementSibling.previousElementSibling.firstElementChild.checked = true;
        btn.closest(".close-button__parent").previousElementSibling.previousElementSibling.firstElementChild.value = "CLOSED";
        btn.closest(".close-button__parent").previousElementSibling.previousElementSibling.lastElementChild.textContent = "CLOSED";
        btn.closest(".table__row").firstElementChild.firstElementChild.checked = true;
      })
    })
  </script>
</body>

</html>