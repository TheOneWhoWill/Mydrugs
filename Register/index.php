<!DOCTYPE html>
<html>
<head>
  <title>MyDrugs | Register</title>
</head>
<body>
  <form class="register" action="index.php" method="post">
    <input type="text" name="Username" placeholder="Username">
    <input type="email" name="Email" placeholder="Email">
    <input type="password" name="pass" placeholder="Password">
    <input type="submit" name="submit" value="Signup">
  </form>
  <?php
  $username = $_POST["Username"];
  $email = $_POST["Email"];
  $password = $_POST["pass"];
  $servername = "localhost";
  $phpusername = "Admin";
  $svrpassword = "secret";
  $database = "accounts";
  $conn = mysqli_connect($servername, $phpusername, $svrpassword, $database);
  $query = "INSERT INTO `users` (`Username`, `Email`, `Password`) VALUES ('$username', '$email', '$password')";
  $result = mysqli_query($conn, $query)
  ?>
</body>
</html>
