<?php 
//Авто
$period = $_POST['period'];
$startCalendar = $_POST['startCalendar'];
$targetUse = $_POST['targetUse'];
$gosNumber = $_POST['gosNumber'];
$yaerCreate = $_POST['yaerCreate'];
$category = $_POST['category'];
$modification = $_POST['modification'];
$vin = $_POST['vin'];
$typeCarDoc = $_POST['typeCarDoc'];
$serialDocCar = $_POST['serialDocCar'];
$numberDocCar = $_POST['numberDocCar'];
$surnameOwner = $_POST['surnameOwner'];

//Собственник
$statusInsuder = $_POST['statusInsuder']; //Является страхователем
$nameOwner = $_POST['nameOwner'];
$middleOwner = $_POST['middleOwner'];
$calendarOwner = $_POST['calendarOwner'];
$typeDocOwner = $_POST['typeDocOwner'];
$serialDocOwner = $_POST['serialDocOwner'];
$numberDocOwner = $_POST['numberDocOwner'];
$dateDocOwner = $_POST['dateDocOwner'];
$issuedDocOwner = $_POST['issuedDocOwner'];
$adressDocOwner = $_POST['adressDocOwner'];
$telOwner = $_POST['telOwner'];
$emailOwner = $_POST['emailOwner'];

//Страхователь


$surnameInsuder = $_POST['surnameInsuder'];
$nameInsuder = $_POST['nameInsuder'];
$middleInsuder = $_POST['middleInsuder'];
$calendarInsuder = $_POST['calendarInsuder'];
$typeDocInsuder = $_POST['typeDocInsuder'];
$serialDocInsuderr = $_POST['serialDocInsuderr'];
$numberDocInsuderr = $_POST['numberDocInsuderr'];
$dateDocInsuderr = $_POST['dateDocInsuderr'];
$issuedDocInsuder = $_POST['issuedDocInsuder'];
$adressDocInsuder = $_POST['adressDocInsuder'];
$telInsuder = $_POST['telInsuder'];
$emailInsuder = $_POST['emailInsuder'];

//Водитель 1
$driverSurname = $_POST['driverSurname'];
$driverName = $_POST['driverName'];
$driverMiddle = $_POST['driverMiddle'];
$driverCalendar = $_POST['driverCalendar'];
$driverVu = $_POST['driverVu'];
$driverExperience = $_POST['driverExperience'];
//Водитель 2
$driverSurname2 = $_POST['driverSurname2'];
$driverName2 = $_POST['driverName2'];
$driverMiddle2 = $_POST['driverMiddle2'];
$driverCalendar2 = $_POST['driverCalendar2'];
$driverVu2 = $_POST['driverVu2'];
$driverExperience2 = $_POST['driverExperience2'];
//Водитель 3
$driverSurname3 = $_POST['driverSurname3'];
$driverName3 = $_POST['driverName3'];
$driverMiddle3 = $_POST['driverMiddle3'];
$driverCalendar3 = $_POST['driverCalendar3'];
$driverVu3 = $_POST['driverVu3'];
$driverExperience3 = $_POST['driverExperience3'];
//Водитель 4
$driverSurname4 = $_POST['driverSurname4'];
$driverName4 = $_POST['driverName4'];
$driverMiddle4 = $_POST['driverMiddle4'];
$driverCalendar4 = $_POST['driverCalendar4'];
$driverVu4 = $_POST['driverVu4'];
$driverExperience4 = $_POST['driverExperience4'];
//Водитель 5
$driverSurname5 = $_POST['driverSurname5'];
$driverName5 = $_POST['driverName5'];
$driverMiddle5 = $_POST['driverMiddle5'];
$driverCalendar5 = $_POST['driverCalendar5'];
$driverVu5 = $_POST['driverVu5'];
$driverExperience5 = $_POST['driverExperience5'];

mail("vladimirincog@gmail.com",
 "Заявка с сайта",
  "Период".$period. "\n".
   "Дата начала" .$startCalendar ,
    "text/plain" );
?>