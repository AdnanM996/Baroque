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
        }, 1);
};

//parallax
let text = document.querySelector('.text');

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;

    //console.log(scroll);

    text.style.transform = `translateY(${(-(scroll) * 1.05) + 'px'})`;
});



