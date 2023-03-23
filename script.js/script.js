const menu = document.querySelector('.header__button');
const menuitems = document.querySelector('.hidden__menu');
const overHidden = document.querySelector('.over');
const menuBtn = document.querySelector('.menu__btn');

menuBtn.addEventListener('click', ()=> {
    const mobileMenu = document.querySelector('.mobile__menu');
    mobileMenu.classList.toggle('bar__active');

    const getScrollHiddin = function() {
        if(window.scrollY) {
            mobileMenu.classList.remove('bar__active');
        }
    };

    window.addEventListener('scroll', getScrollHiddin);
});

function getClick() {
    const icon = document.querySelector('.active__icon');
    icon.classList.toggle('menu__icon');
    menuitems.classList.toggle('menu__active');
    overHidden.classList.toggle('over-hidden');

    const getScrollHiddin = function() {
        if(window.scrollY) {
            icon.classList.remove('menu__icon');
            menuitems.classList.remove('menu__active');
            overHidden.classList.remove('over-hidden');
        }
    };

    window.addEventListener('scroll', getScrollHiddin);
};

function scrollWindow() {
    const header = document.querySelector('header');
    // console.log(scrollY.toFixed() + 'px');

    if(scrollY >= 50) {
        header.classList.add('header__active');
    } else {
        header.classList.remove('header__active');
    }
};

window.addEventListener('scroll', scrollWindow);
menu.addEventListener('click', getClick);
overHidden.addEventListener('click', getClick);