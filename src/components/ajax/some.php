<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Контактная информация</title>
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"></script>
</head>
<body>
    

<script src="ajaxQuery.js"></script>

</body>
</html>

<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $title = $_POST['title'];
  $dsn = 'mysql:host=localhost;dbname=flower_shop';
  $username = 'root';
  $password = '';

  try {
      $conn = new PDO($dsn, $username, $password);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      $sql = "INSERT INTO `contacts_form` (name, email, title) VALUES (:name, :email, :title)";
      $stmt= $conn->prepare($sql);
      $stmt->execute(['name' => $name, 'email' => $email, 'title' => $title]);

      echo "Данные успешно добавлены в базу данных";
  } catch(PDOException $e) {
      echo "Ошибка: " . $e->getMessage();
  }

  $conn = null;
}
$date = [
    'name'=> $_POST['name'],
    'email'=> $_POST['email'],
    'title'=> $_POST['title']
];

$connect = new PDO('mysql:host=localhost; dbname=flower_shop' , 'root', '');
$sql = 'INSERT INTO `contacts_form` (name, email, title) VALUES (:name, :email, :title)';
$statment = $connect->prepare($sql);
$result = $statment->execute($date);
var_dump($result);



?>