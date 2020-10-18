
"use strict";                                                           //ES6 для всего файла

let navItem = document.getElementsByClassName('item-nav');              //Элементы меню
let navOpenButton = document.getElementsByClassName('navOpenButton');   //Стрелка открытия меню
let navCloseButton = document.getElementsByClassName('navCloseButton'); //Стрелка закрытия меню
let statusInsuder = document.getElementById('status-insuder');          //Cтатус собственника/страхователя
let menuInsuder = document.getElementsByClassName('f4');                //Меню данных страхователя
let insuder = document.getElementsByClassName('menu-4');                //Заголовок меню данных страхователя
let driversElement = document.getElementsByClassName('driver');          //Элементы меню кол-ва водителей
let driversForm = document.getElementsByClassName('frame-driver');      //Форма ввода водятеля
let middleNameCheck = document.getElementsByClassName('middle-name-check'); //ChekBox отчества
let middleNameForm = document.getElementsByClassName('middle-name');    //input отчества


navCloseButton[0].style.display = 'none';
driversForm[0].style.display = 'flex';

//Открытие и закрытие меню
function navOpenFun() {
    navCloseButton[0].style.display = 'block';
    navOpenButton[0].style.display = 'none';
    for (let i = 0; i <= navItem.length; i++) {
        navItem[i].style.display = 'block';
    }
}

function navCloseFun() {
    navCloseButton[0].style.display = 'none';
    navOpenButton[0].style.display = 'block';
    for (let i = 0; i <= navItem.length; i++) {
        navItem[i].style.display = 'none';
    }
}
//Страхователь = владелец ?
function checkedStatusInsuder() {
    if (statusInsuder.checked === true) {
        menuInsuder[0].style.display = 'none';
        insuder[0].style.display = 'none';

    }
    else {
        menuInsuder[0].style.display = 'flex';
        insuder[0].style.display = 'block';
    }
}


document.addEventListener("click", function (e) {
    let TargetElement = e.target;

    //Переключатель меню водителей
    if (e.target.className == 'driver' || e.target.className == 'driver start-driver' || e.target.className == 'driver end-driver') {
        TargetElement.style.backgroundColor = '#8abe5c';
        for (let i = 0; i < driversElement.length; i++) {
            if (TargetElement != driversElement[i]) {
                driversElement[i].style.backgroundColor = 'white';
            }
        }

        if ("Не ограниченная" == TargetElement.textContent) {

            for (let i = 0; i <= driversForm.length; i++) {
                driversForm[i].style.display = 'none';
            }
        }

        else {
            for (let i = 0; i <= driversForm.length; i++) {
                if (Number(TargetElement.textContent) - 1 >= i) { driversForm[i].style.display = 'flex'; }
                else { driversForm[i].style.display = 'none'; }

            }
        }
    }
});

//Плавный скролинг
jQuery(document).ready(function () {
    jQuery("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1100);
        return false;
    });
});

//Маска ввода для номера телефона
$(document).ready(() => {
    $(".tel").mask("+7 (999) 999-99-99");
});


//Проверка checkboxs-отчества
function check() {
    for (let i = 0; i <= middleNameCheck.length; i++)
        if (middleNameCheck[i].checked) {
            middleNameForm[i].setAttribute("disabled", "true");
            middleNameForm[i].style.backgroundColor = ' #e7e7e7';
        }
        else {
            middleNameForm[i].removeAttribute("disabled");
            middleNameForm[i].style.backgroundColor = 'white';

        }
}


function showWindowOk(text) {
    let windowOk = document.getElementsByClassName('windowOk');
    let okText = document.getElementsByClassName('okText');
    okText[0].textContent = text;
    windowOk[0].style.display = 'block';
}
function hideWindowOk() {
    let windowOk = document.getElementsByClassName('windowOk');
    windowOk[0].style.display = 'none';
}

//Валидация формы
function checkFormData() { return true; }


//Проверка телефонной формы на заполненность полей
function checkFormPhone() {
    let errorForm = true;
    let elementsForm = document.getElementsByClassName('call-order');
    for (let i = 0; i < elementsForm.length; i++) {
            elementsForm[i].classList.remove('__error');
            errorForm = true;
        }
    for (let i = 0; i < elementsForm.length; i++) {
        if (elementsForm[i].value == '') {
            elementsForm[i].classList.add('__error');
            errorForm = false;
        }
    }
    return errorForm;
}


//Отправка данных на почту средствами AJAX и jQuery
document.addEventListener('DOMContentLoaded', function () {

    $('.form-action').submit(function () {
        if (checkFormData()) {
            $.post(
                'http://localhost:8888/insuranceAvto/php/data-email.php',     // адрес обработчика 'http://localhost:8888/insuranceAvto/php/data-email.php'   https://insuranceavto.000webhostapp.com/
                $('.form-action').serialize(),                                // отправляемые данные          

                function (msg) {                                              // получен ответ сервера  
                    showWindowOk('Мы расчитаем стоймость в течении 5 минут и перезвоним Вам');
                }
            );
            return false;                                                     //flase - не перезагружать страницу; true - перезагрузить страницу
        }  
        else{showWindowOk('Все поля должны быть заполнены');}                                                 
    });

    $('.form-call-order').submit(function () {
        if (checkFormPhone()) {
            $.post(
                'http://localhost:8888/insuranceAvto/php/phone-email.php',     // адрес обработчика  'http://localhost:8888/insuranceAvto/php/phone-email.php' https://insuranceavto.000webhostapp.com/
                $('.form-call-order').serialize(),                                 // отправляемые данные          

                function (msg) {                                               // получен ответ сервера  
                    showWindowOk('Мы перезвоним Вам в течении 5 минут');
                }

            );
            return false;                                                       //flase - не перезагружать страницу; true - перезагрузить страницу
       }     
       else{showWindowOk('Все поля должны быть заполнены');}                                   
    });
    //Скрыть уведомление о отправке данных
    $('.okButton').click(() => { hideWindowOk(); })
})