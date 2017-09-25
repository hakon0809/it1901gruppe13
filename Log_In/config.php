<?php
  define('DB_SERVER', 'mysql.stud.ntnu.no');
  define('DB_USERNAME', 'hkmardal_admin');
  define('DB_PASSWORD', 'sommer');
  define('DB_DATABASE', 'users');
  $db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);
?>
