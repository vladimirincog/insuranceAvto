
let navItem = document.getElementsByClassName('item-nav');              //Элементы меню
let navOpenButton = document.getElementsByClassName('navOpenButton');   //Стрелка открытия меню
let navCloseButton = document.getElementsByClassName('navCloseButton'); //Стрелка закрытия меню
navCloseButton[0].style.display ='none';

function navOpenFun(){
    navCloseButton[0].style.display = 'block';
    navOpenButton[0].style.display = 'none';
    for(let i=0; i<=navItem.length; i++){
        navItem[i].style.display = 'block';
    }
}

function navCloseFun(){
    navCloseButton[0].style.display ='none';
    navOpenButton[0].style.display ='block';
    for(let i=0; i<=navItem.length; i++){
        navItem[i].style.display = 'none';
    }
}