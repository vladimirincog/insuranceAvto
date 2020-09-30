<?php
//Авто
$period = $_POST['period'];
$startCalendar = $_POST['startCalendar'];
$targetUse = $_POST['targetUse'];
$gosNumber = $_POST['gosNumber'];
$yaerCreate = $_POST['yaerCreate'];
$category = $_POST['category'];
$model = $_POST['model'];
$brand = $_POST['brand'];
$modification = $_POST['modification'];
$vin = $_POST['vin'];
$typeCarDoc = $_POST['typeCarDoc'];
$serialDocCar = $_POST['serialDocCar'];
$numberDocCar = $_POST['numberDocCar'];


//Собственник
$statusInsuder = $_POST['statusInsuder']; //Является страхователем
$surnameOwner = $_POST['surnameOwner'];
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
$driverVuDate = $_POST['driverVuDate'];
$driverExperience = $_POST['driverExperience'];
//Водитель 2
$driverSurname2 = $_POST['driverSurname2'];
$driverName2 = $_POST['driverName2'];
$driverMiddle2 = $_POST['driverMiddle2'];
$driverCalendar2 = $_POST['driverCalendar2'];
$driverVu2 = $_POST['driverVu2'];
$driverVuDate2 = $_POST['driverVuDate2'];
$driverExperience2 = $_POST['driverExperience2'];
//Водитель 3
$driverSurname3 = $_POST['driverSurname3'];
$driverName3 = $_POST['driverName3'];
$driverMiddle3 = $_POST['driverMiddle3'];
$driverCalendar3 = $_POST['driverCalendar3'];
$driverVu3 = $_POST['driverVu3'];
$driverVuDate3 = $_POST['driverVuDate3'];
$driverExperience3 = $_POST['driverExperience3'];
//Водитель 4
$driverSurname4 = $_POST['driverSurname4'];
$driverName4 = $_POST['driverName4'];
$driverMiddle4 = $_POST['driverMiddle4'];
$driverCalendar4 = $_POST['driverCalendar4'];
$driverVu4 = $_POST['driverVu4'];
$driverVuDate4 = $_POST['driverVuDate4'];
$driverExperience4 = $_POST['driverExperience4'];
//Водитель 5
$driverSurname5 = $_POST['driverSurname5'];
$driverName5 = $_POST['driverName5'];
$driverMiddle5 = $_POST['driverMiddle5'];
$driverCalendar5 = $_POST['driverCalendar5'];
$driverVu5 = $_POST['driverVu5'];
$driverVuDate5 = $_POST['driverVuDate5'];
$driverExperience5 = $_POST['driverExperience5'];

mail(
    "vladimirincog@gmail.com",
    "Заявка с сайта",
    "АВТОМОБИЛЬ" . "\n" .
        "Период: " . $period . "\n" .
        "Дата начала: " . $startCalendar . "\n" .
        "Цель использования: " . $targetUse . "\n" .
        "Гос номер: " . $gosNumber . "\n" .
        "Год выпуска: " . $yaerCreate . "\n" .
        "Категория: " . $category . "\n" .
        "Марка: " . $brand . "\n" .
        "Модель: " . $model . "\n" .
        "Модификация: " . $modification . "\n" .
        "VIN: " . $vin . "\n" .
        "Тип документа: " . $typeCarDoc . "\n" .
        "Серия документа: " . $serialDocCar . "\n" .
        "Номер документа авто: " . $numberDocCar .

        "СОБСТВЕННИК" . "\n" .
        "Является страхователем: " . $statusInsuder . "\n" .
        "Фамилия: " . $surnameOwner . "\n" .
        "Имя: " . $nameOwner . "\n" .
        "Отчество: " . $middleOwner . "\n" .
        "Дата рождения: " . $calendarOwner . "\n" .
        "Тип документа: " . $typeDocOwner . "\n" .
        "Серия документа: " . $serialDocOwner . "\n" .
        "Номер документа: " . $numberDocOwner . "\n" .
        "Дата выдачи документа: " . $dateDocOwner . "\n" .
        "Выдан: " . $issuedDocOwner . "\n" .
        "Адрес регистрации: " . $adressDocOwner . "\n" .
        "Телефон: " . $telOwner . "\n" .
        "email: " . $emailOwner . "\n" .

        "СТРАХОВАТЕЛЬ" . "\n" .
        "Фамилия: " . $surnameInsuder . "\n" .
        "Имя: " . $nameInsuder . "\n" .
        "Отчество: " . $middleInsuder . "\n" .
        "Дата рождения: " . $calendarInsuder . "\n" .
        "Тип документа: " . $typeDocInsuder . "\n" .
        "Серия документа: " . $serialDocInsuder . "\n" .
        "Номер документа: " . $numberDocInsuder . "\n" .
        "Дата выдачи документа: " . $dateDocInsuder . "\n" .
        "Выдан: " . $issuedDocInsuder . "\n" .
        "Адрес регистрации: " . $adressDocInsuder . "\n" .
        "Телефон: " . $telInsuder . "\n" .
        "email: " . $emailInsuder . "\n" .

        "\nВОДИТЕЛЬ-1" .
        "\nФамилия: " . $driverSurname .
        "\nИмя: " . $driverName .
        "\nОтчество: " . $driverMiddle .
        "\nДата рождения: " . $driverCalendar .
        "\nНомер ВУ: " . $driverVu .
        "\nДата выдачи ВУ: " . $driverVuDate .
        "\nСаж: " . $driverExperience .

        "\nВОДИТЕЛЬ-2" .
        "\nФамилия: " . $driverSurname2 .
        "\nИмя: " . $driverName2 .
        "\nОтчество: " . $driverMiddle2 .
        "\nДата рождения: " . $driverCalendar2 .
        "\nНомер ВУ: " . $driverVu2 .
        "\nДата выдачи ВУ: " . $driverVuDate2 .
        "\nСаж: " . $driverExperience2 .

        "\nВОДИТЕЛЬ-3" .
        "\nФамилия: " . $driverSurname3 .
        "\nИмя: " . $driverName3 .
        "\nОтчество: " . $driverMiddle3 .
        "\nДата рождения: " . $driverCalendar3 .
        "\nНомер ВУ: " . $driverVu3 .
        "\nДата выдачи ВУ: " . $driverVuDate3 .
        "\nСаж: " . $driverExperience3 .

        "\nВОДИТЕЛЬ-4" .
        "\nФамилия: " . $driverSurname4 .
        "\nИмя: " . $driverName4 .
        "\nОтчество: " . $driverMiddle4 .
        "\nДата рождения: " . $driverCalendar4 .
        "\nНомер ВУ: " . $driverVu4 .
        "\nДата выдачи ВУ: " . $driverVuDate4 .
        "\nСаж: " . $driverExperience4 .

        "\nВОДИТЕЛЬ-5" .
        "\nФамилия: " . $driverSurname5 .
        "\nИмя: " . $driverName5 .
        "\nОтчество: " . $driverMiddle5 .
        "\nДата рождения: " . $driverCalendar5 .
        "\nНомер ВУ: " . $driverVu5 .
        "\nДата выдачи ВУ: " . $driverVuDate5 .
        "\nСаж: " . $driverExperience5 .

        "Данные для страховки"
);
function callForm()
{
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
}
