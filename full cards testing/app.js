const btn = document.getElementById('info__btn');

btn.addEventListener('click', ()=> {
    const cards = document.querySelectorAll('.info__card');
    const img = document.querySelector('.info__button_img');

    img.classList.toggle('info__img_active');
    cards.forEach(i => {
        i.classList.toggle('info__hidden');
        i.classList.toggle('info__block');
    });    
});