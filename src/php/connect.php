<?php

$connect = mysqli_connect('localhost', 'root', '', 'queue');

if (!$connect) {
  die('Error connecting to database');
}
