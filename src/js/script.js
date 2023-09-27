AOS.init();

const swiper = new Swiper(".coursesSwiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 0,
    grabcursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 1px

        690: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 767px
        767: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 1140px
        1140: {
            slidesPerView: 3,
            spaceBetween: 10,
        }
    }
});

const swiper2 = new Swiper(".reviewsSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,

    effect: "cards",
    grabcursor: true,

    // effect: "flip",

});

// JavaScript
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const cross = document.querySelector('.menu__close');
const menuButtons = document.querySelectorAll('[data-menu]')

// === menu ===
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden'
});

cross.addEventListener('click', function () {
    menu.classList.remove('active');
    document.body.style.overflow = ''

});

menuButtons.forEach((item) => {
    item.addEventListener('click', () => {

        menu.classList.remove('active');
        document.body.style.overflow = ''
    })
});
// === menu end ===

// const ctaLink = document.querySelector('.cta')
// console.log(ctaLink)

// function toggleCtaLink() {
//     ctaLink.classList.add('hide')
// }

// function hideWindowOnScroll() {
//     if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
//         toggleCtaLink()
//         // window.removeEventListener('scroll', showWindowNyScroll) // removes eventListener('scroll') to open modal only once
//     }
//     if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
//         toggleCtaLink()
//         // window.removeEventListener('scroll', showWindowNyScroll) // removes eventListener('scroll') to open modal only once
//     }

// }
// window.addEventListener('scroll', hideWindowOnScroll)



//Отправка формы в Google Sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbxU-pqd4o96uVOZEI106NgFeOwPFnAt6EEVnN1jrrSW5w9zTAJXtoLCDGKcq2ha28Oe/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})