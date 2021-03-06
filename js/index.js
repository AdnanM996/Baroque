//loading animations

window.addEventListener('load', loader());

function loader(success) {

    let obj = document.querySelector('.preloader');
    let inner = document.querySelector('.preloader__inner');
    let page = document.querySelector('.page');
    let heroHeading = document.querySelector('.hero--heading');
    let boxItem = document.querySelectorAll('.box__item');

    obj.classList.add('show');
    page.classList.remove('show');
    let w = 0;

    let t = setInterval(() => {
        w += 1;
        inner.textContent = w+'%';
            
            if (w === 100){
                obj.classList.remove('show');
                page.classList.add('show');
                clearInterval(t);
                heroHeading.style.opacity = '1';
                heroHeading.style.transform = 'translateY(0%)';
                heroHeading.style.transition = 'all 1s ease';
                
                function boxitem() {
                        for(let i = 0; i < boxItem.length; i++) {
                            setInterval(() => {
                                boxItem[i].style.opacity = 1;
                                boxItem[i].style.transition = 'all .3s ease';
                            },i * 300);
                        } 
                };

                boxitem();


                w = 0;
                    if (success){
                        return success();
                    }
            }
        }, 30);
};

//parallax
let text = document.querySelector('.text');

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;

    //console.log(scroll);

    text.style.transform = `translateY(${(-(scroll) * 1.2) + 'px'})`;

    //main section animations
    let mainSec = document.querySelector('.main');
    let gridHeading = document.querySelectorAll('.grid--heading');
    let overlay = document.querySelectorAll('.overlay');

    if(scroll >( mainSec.clientHeight / 2)) {
        for(let i = 0; i < gridHeading.length; i++) {
            gridHeading[i].style.transform = 'translateY(0%)';
            gridHeading[i].style.opacity = '1';
            gridHeading[i].style.transition = 'all .5s ease';
        }

        for(let i = 0; i < overlay.length; i++) {
            setInterval(() => {
                overlay[i].style.transform = 'translateX(100%)';
                overlay[i].style.opacity = '0';
                overlay[i].style.transition = 'all .5s ease-out';
            },i * 500);
        }
    }

});

//open nav
let menu = document.querySelector('.menu');
let menuTop = document.querySelector('.menu__line--top');
let menuMid = document.querySelector('.menu__line--mid');
let menuBottom = document.querySelector('.menu__line--bottom');
let nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
    menuTop.classList.toggle('menu__line--topOpen');
    menuMid.classList.toggle('menu__line--midOpen');
    menuBottom.classList.toggle('menu__line--bottomOpen');
});

//Footer year

let date = new Date();
let year = date.getFullYear();
let footerYear = document.querySelector('.year');

footerYear.innerHTML = year;