<?php

   //put this in its own config.php file later
   include("config.php");
   session_start();


  if($_SERVER["REQUEST_METHOD"] == "POST") {
    //username and password is sent from form with POST method
    $myusername = mysqli_real_escape_string($db, $_POST['username']);
    $mypassword = mysqli_real_escape_string($db, $_POST['password']);

    $sql = "SELECT id FROM table WHERE username = 'myusername' and password = 'mypassword'";
    $result = mysqli_query($db, $sql);
    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
    $usertype = $row['role'];

    $count = mysqli_num_rows($result);

    // If result matched $myusername and $mypassword, table row must be 1 row

    if($count == 1) {
      session_register("myusername");
      $_SESSION['login_user'] = $myusername

      switch ($usertype) {
        case 'arrangor':
            header();
            break;
        case 'tekniker':
            header();
            break;
        case 'manager':
            header();
            break;
        case 'bookingansvarlig'
            header();
            break;
        case 'bookingsjef'
      }

    }else {
      $error = "Your Login Name or Password is invalid";
    }
  }
?>

CREATE TABLE 'users' (
    'id' INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    'username' VARCHAR(30) NOT NULL,
    'password' CHAR(128) NOT NULL,
    'role' VARCHAR(30) NOT NULL
)
