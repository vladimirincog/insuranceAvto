<?php
$callName = $_POST['callName'];
$callTel = $_POST['callTel'];

mail(
    "9092345673@mail.ru",
    "Заказ звонка с сайта",
    "\nНомер: " . $callTel .
        "\nИмя: " . $callName
);
echo '<script>location.replace("../index.html");
        alert("Звонок заказан! Мы перезвоним в ближайшее время!");</script>'; exit;
