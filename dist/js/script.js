window.addEventListener('DOMContentLoaded', () => {

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

    //Отправка формы в Google Sheets
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxv21gKz3lwTK6-22tZbHqyvdv6M5jDkyVBy1bbEw0HJ-U6kO5wmOpYokLLjIAPLvpD/exec'
    const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
    })

    //Select
    const selectSingle = document.querySelector('.__select');
    const selectSingle_title = selectSingle.querySelector('.__select__title');
    const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');
    const textarea = document.querySelector('textarea')
    const formInputs = document.querySelectorAll('.__select__input');
    // console.log(formInputs)

    // Toggle menu
    selectSingle_title.addEventListener('click', () => {
        if ('active' === selectSingle.getAttribute('data-state')) {
            textarea.style.zIndex = 2;
            selectSingle.setAttribute('data-state', '');
        } else {
            selectSingle.setAttribute('data-state', 'active');
            textarea.style.zIndex = 0;
        }
    });

    // Close when click to option
    for (let i = 0; i < selectSingle_labels.length; i++) {
        selectSingle_labels[i].addEventListener('click', (evt) => {
            selectSingle_title.textContent = evt.target.textContent;
            selectSingle.setAttribute('data-state', '');
            textarea.style.zIndex = 2;
        });
    }

    //Pop-up
    const modalWindow = document.querySelector('.overlay');
    const modalButtons = document.querySelectorAll('.contact__form__button');
    const modalClose = document.querySelector('.pop-up__close');

    const contactInputs = document.querySelectorAll('[data-needed]');

    const policy = document.querySelector('.privacy-policy__input');

    // modal open
    modalButtons.forEach((item) => {

        item.addEventListener('click', openModal);
    });

    // modal close
    modalClose.addEventListener('click', closeModal);

    // modal close on window
    window.addEventListener('click', (e) => {
        if (e.target == modalWindow) {
            closeModal()
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            closeModal()
        }
    })

    function openModal() {

        contactInputs.forEach((input) => {
            if ((input.value !== '') & (policy.checked)) {
                // console.log(input.value)
                modalWindow.style.display = 'block'
                // modal scroll lock
                document.body.style.overflow = 'hidden'
                formInputs.forEach((item)=>{
                    item.removeAttribute('required', '');
                })
            }
        })

    }
    function closeModal() {
        modalWindow.style.display = 'none'
        // modal scroll unlock
        document.body.style.overflow = ''
        document.getElementById('form').reset()
        formInputs.forEach((item)=>{
            item.setAttribute('required', '');
        })
    }

});

const select = document.querySelector('.change-lang');
const allLang = ['ru', 'ua'];

select.addEventListener('change', changeURLLanguage);

//changing the url to one with chosen language hash
function changeURLLanguage(){
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}
function changeLanguage(){
    let hash = window.location.hash;
    hash = hash.substr(1);

    if (!allLang.includes(hash)){
        location.href = window.location.pathname + '#ru';
        location.reload();
    }

    select.value = hash;

    for(let key in langArr){
        document.querySelector('.lng-' + key).innerHTML = langArr[key][hash];
        document.querySelector('.lng-' + key).placeholder = langArr[key][hash];
    }
}

changeLanguage()
