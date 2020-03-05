function loader(success) {

    let obj = document.querySelector('.preloader');
    let inner = document.querySelector('.preloader__inner');
    let page = document.querySelector('.page');

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
                w = 0;
                    if (success){
                        return success();
                    }
            }
        }, 30);
}

loader();
