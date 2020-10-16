<?php
if (!$_POST) exit('No direct script access allowed'); //Если нет входящих POST запросов завершить работу скрипта (защита)

$callName = $_POST['callName'];
$callTel = $_POST['callTel'];

mail(
    "9092345673@mail.ru",  //9092345673@mail.ru   vladimirincog@gmail.com
    "Заказ звонка с сайта",
    "\nНомер: " . $callTel .
        "\nИмя: " . $callName
);
exit;
