<?php
$callName = $_POST['callName'];
$callTel = $_POST['callTel'];

mail(
    "9092345673@mail.ru",
    "Заказ звонка с сайта",
    "\nНомер: " . $callTel .
        "\nИмя: " . $callName,
    "Данные для звонка"
);
echo '<script>location.replace("../index.html");</script>'; exit;
