
let navItem = document.getElementsByClassName('item-nav');              //Элементы меню
let navOpenButton = document.getElementsByClassName('navOpenButton');   //Стрелка открытия меню
let navCloseButton = document.getElementsByClassName('navCloseButton'); //Стрелка закрытия меню
let statusInsuder = document.getElementById('status-insuder');          //Cтатус собственника/страхователя
let menuInsuder = document.getElementsByClassName('f4');                //Меню данных страхователя
let insuder = document.getElementsByClassName('menu-4')                 //Заголовок меню данных страхователя

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