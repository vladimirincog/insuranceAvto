
let navItem = document.getElementsByClassName("item-nav");
let navPoint = document.getElementsByClassName("navPoint");
navPoint.style.display = 'none';
window.addEventListener('resize', function () {
    if (1200 > document.body.clientWidth) {
        for (let i = 1; i <= navItem.length; i++) {
            navItem[i].style.display = 'none';
        }
       
        
    }
    else {
        for (let i = 1; i <= navItem.length; i++) {
            navItem[i].style.display = 'block';
        }
        
    }

});
