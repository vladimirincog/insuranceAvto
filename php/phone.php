<?php
$callName = $_POST['callName'];
$callTel = $_POST['callTel'];

mail(
    "vladimirincog@gmail.com",
    "Заказ звонка с сайта",
    "\nНомер: " . $callTel .
        "\nИмя: " . $callName
);
echo '<script>location.replace("../index.html");
        alert("Звонок заказан! Мы перезвоним в ближайшее время!");</script>'; exit;
