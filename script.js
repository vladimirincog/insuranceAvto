
let navItem = document.getElementsByClassName('item-nav');              //Элементы меню
let navOpenButton = document.getElementsByClassName('navOpenButton');   //Стрелка открытия меню
let navCloseButton = document.getElementsByClassName('navCloseButton'); //Стрелка закрытия меню
let statusInsuder = document.getElementById('status-insuder');          //Cтатус собственника/страхователя
let menuInsuder = document.getElementsByClassName('f4');                //Меню данных страхователя
let insuder = document.getElementsByClassName('menu-4')                 //Заголовок меню данных страхователя
//let data = $.getJSON( "question.json", function( data ) {});                       //Получение ответов на часто задаваемые вопросы вопросы из JSON файла - "JSON БД"
//var mydata = JSON.parse(data);

function readTextFile(file, callback) {
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

//usage:
readTextFile("question.json", function (text) {
    var data = JSON.parse(text);
    console.log(data);
});

navCloseButton[0].style.display = 'none';

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


//Плавный скролинг (рабочий копипаст)
jQuery(document).ready(function () {
    jQuery("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1100);
        return false;
    });
});