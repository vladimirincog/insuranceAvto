window.addEventListener('DOMContentLoader', () => {
    const ul = document.querySelector("ul");
    ul.childNodes.forEach(node => {
        console.log(node);
    });
})


//Все теги элемента <body>
const body = document.querySelector('body');

function recursy(element) {
    element.childNodes.forEach(node => {
        console.log(node);
        if (element.childNodes.length > 1) {
            recursy(node);
        }
    });
};
recursy(body);

//Парсер https://tambov.vbr.ru/strahovanie/auto/all/
/*

*/


const li = document.querySelectorAll('li[id^="brand"]'); // ищем все li елементы, в которых id начинается на brand
 
let arrModel = [];
for (let i = 0; i <= li.length; i++) {
    if (!!li[i]) {                                     // есть ли елемент 
        let obj = {
            nameModel: li[i].firstChild.textContent,
            url: li[i].firstChild.href
        };
        arrModel.push(obj);
    }
}
console.log(JSON.stringify(arrModel));


//Парсер https://www.soglasie.ru/avto/kalkulyator-eosago/#/auto
/* 1. Селектор с маркой являющейся "кнопкой" для перехода к моделям авто
<span data-v-2fd750e4="" class="car-list-item__text">AC</span> */


const mark = document.querySelectorAll('span[class^="car-list-item"]');
let arrMark = [];

for(let i=0; i<mark.length; i++){
    arrMark.push(mark[i].textContent);
}

/* 2. Кликаем по марке авто и получаем модели марки записываем их в строку соответствующей марки
переходим на страницу назад и повторяем цикл для другой модели
<span data-v-2fd750e4="" class="car-list-item__text">ACE</span> */
/*<div data-v-2c05f226="" class="tabs__header-item _active">Марка</div> - кнопка для возврата назад*/
const markButton = document.querySelectorAll('span[class^="tabs__header-item _active"]');

for(let i=0; i<mark.length; i++){
    mark[i].click();
    let model = document.querySelectorAll('span[class^="car-list-item__text"]');
    for(let j=0; j<model.length; j++){
        arrMark[i][j+1]=model.textContent;
    }
}
