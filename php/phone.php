<?php
$callName = $_POST['callName'];
$callTel = $_POST['callTel'];
mail(
    "vladimirincog@gmail.com",
    "Заказ звонка с сайта",
    "\nНомер: " . $callName .
        "\nИмя: " . $callTel,
    "Данные для звонка"
);
header("Location: https://insuranceavto.000webhostapp.com/");
