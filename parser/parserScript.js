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