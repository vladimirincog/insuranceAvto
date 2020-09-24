
let navItem = document.getElementsByClassName('item-nav');              //Элементы меню
let navOpenButton = document.getElementsByClassName('navOpenButton');   //Стрелка открытия меню
let navCloseButton = document.getElementsByClassName('navCloseButton'); //Стрелка закрытия меню
let statusInsuder = document.getElementById('status-insuder');          //Cтатус собственника/страхователя
let menuInsuder = document.getElementsByClassName('f4');                //Меню данных страхователя
let insuder = document.getElementsByClassName('menu-4');                //Заголовок меню данных страхователя
let driversElement = document.getElementsByClassName('driver');     //Элементы меню кол-ва водителей
let driversForm = document.getElementsByClassName('frame-driver'); //Форма ввода водятеля
let middleNameCheck = document.getElementsByClassName('middle-name-check'); //ChekBox отчества
let middleNameForm = document.getElementsByClassName('middle-name'); //input отчества

navCloseButton[0].style.display = 'none';
driversForm[0].style.display = 'flex';

//Авто закрытие меню для телефонов
/*document.addEventListener("click", function (e) {
    if (e.target.className == "item-nav" && document.documentElement.clientWidth <= 1000) {
        for (let i = 0; i <= navItem.length; i++) {
            navItem[i].style.display = 'none';
        }
        navCloseFun();
    }
});*/

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
//Страхователь = владелец
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
    if (e.target.className == 'driver' || e.target.className == 'driver start-driver' || e.target.className == 'driver end-driver') { //Переключатель меню водителей
        TargetElement.style.backgroundColor = '#8abe5c';
        for (let i = 0; i < driversElement.length; i++) {
            if (TargetElement != driversElement[i]) {
                driversElement[i].style.backgroundColor = 'white';
            }
        }

        if ("Не ограниченная" == TargetElement.textContent) {
            
            for(let i=0; i<=driversForm.length; i++){
                driversForm[i].style.display = 'none';
            }
        }

        else {
            for (let i = 0; i <= driversForm.length; i++) {

                if(Number(TargetElement.textContent)-1 >= i){driversForm[i].style.display = 'flex';}
                else{driversForm[i].style.display = 'none';}
                
            }
        }
    }
});

//Плавный скролинг (рабочий копипаст)
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
    for(let i=0; i<=middleNameCheck.length; i++)
    if (middleNameCheck[i].checked) {
        middleNameForm[i].setAttribute("disabled", "true");
        middleNameForm[i].style.backgroundColor = ' #e7e7e7';
    }
    else {
        middleNameForm[i].removeAttribute("disabled");
        middleNameForm[i].style.backgroundColor = 'white';
        
    }
}
/*function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("question.json", function (text) {
    var data = JSON.parse(text);
    console.log(data);
});*/



