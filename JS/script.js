"use strict";                                                           //Строгий стиль

let navItem = document.getElementsByClassName('item-nav');              //Элементы меню
let navOpenButton = document.getElementsByClassName('navOpenButton');   //Стрелка открытия меню
let navCloseButton = document.getElementsByClassName('navCloseButton'); //Стрелка закрытия меню
let statusInsuder = document.getElementById('status-insuder');          //Cтатус собственника/страхователя
let menuInsuder = document.getElementsByClassName('f4');                //Меню данных страхователя
let insuder = document.getElementsByClassName('menu-4');                //Заголовок меню данных страхователя
let driversElement = document.getElementsByClassName('driver');          //Элементы меню кол-ва водителей


navCloseButton[0].style.display = 'none';
MenuInitializer();

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

//Переключатель меню водителей
document.addEventListener("click", function (e) {
    let TargetElement = e.target;
    let driversForm = document.getElementsByClassName('frame-driver');

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
                if (Number(TargetElement.textContent) - 1 >= i) {
                    driversForm[i].style.display = 'flex';
                }
                else {
                    driversForm[i].style.display = 'none';
                }

            }
        }
    }
});

function MenuInitializer() {
    let driversForm = document.getElementsByClassName('frame-driver');
    let menuInsuder = document.getElementsByClassName('f4');

    for (let i = 0; i < driversForm.length; i++) {
        driversForm[i].style.display = 'none';
    }
    menuInsuder[0].style.display = 'flex';
}
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

function checkMiddleName() {
    let middleNameCheck = document.getElementsByClassName('middle-name-check');
    let middleNameForm = document.getElementsByClassName('middle-name');
    for (let i = 0; i <= middleNameCheck.length; i++)
        if (middleNameCheck[i].checked) {
            middleNameForm[i].value = "Без отчества";
            middleNameForm[i].setAttribute("disabled", "true");
            middleNameForm[i].style.backgroundColor = ' #e7e7e7';
        }
        else {
            middleNameForm[i].value = "";
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

//Возвращает true если проверка прошла успешно
function checkFormData() {
    let errorForm = true;
    let inputsForm = document.forms.formAction.getElementsByTagName('input');
    let selectForm = document.forms.formAction.getElementsByTagName('select');

    //---------------------Инициализации-------------------------//
    for (let i; i < inputsForm.length; i++) {
        inputsForm[i].classList.remove('__error');
    }

    for (let i; i < selectForm.length; i++) {
        selectForm[i].classList.remove('__error');
    }
    //----Добавление класса __error если есть необходимость----//
    for (let i = 0; i < selectForm.length; i++) {
        if (selectForm[i].classList.contains('insuder')) {
            if (selectForm[i].parentNode.parentNode.style.display == 'block') {
                if (selectForm[i].value == 'Выберите из списка') {
                    selectForm[i].classList.add('__error');
                    errorForm = false;
                }
            }

        }
        else if (selectForm[i].value == 'Выберите из списка') {
            selectForm[i].classList.add('__error');
            errorForm = false;
        }
    }

    for (let i = 0; i < inputsForm.length; i++) {
        if (inputsForm[i].classList.contains('driverInput') || inputsForm[i].classList.contains('insuder')) {
            if (inputsForm[i].parentNode.parentNode.style.display == 'flex' && inputsForm[i].value == '') {
                inputsForm[i].classList.add('__error');
                errorForm = false;
            }
        }
        else if (inputsForm[i].value == '') {
            inputsForm[i].classList.add('__error');
            errorForm = false;
        }
    }

    return errorForm;
}

function cleanFormPhone(){
    let elementsForm = document.getElementsByClassName('call-order');
    for (let i = 0; i < elementsForm.length; i++) {
        elementsForm[i].value = '';
        elementsForm[i].classList.remove('__error');
        errorForm = true;
    }
}

//Возвращает true если проверка прошла успешно
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

    $('.buttonSendData').click(function () {
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
        else {
            showWindowOk('Все поля должны быть заполнены');
        }
    });

    $('.buttonSendPhone').click(function () {
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
        else {
            showWindowOk('Все поля должны быть заполнены');
        }
    });
    //Скрыть уведомление о отправке данных
    $('.okButton').click(() => { hideWindowOk(); })
})

$(document).ready(function () {
    $('.spoiler_links').click(function () {
        $(this).parent().children('div.spoiler_body').toggle('normal');
        return false;
    });
});