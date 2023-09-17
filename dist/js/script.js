AOS.init();

const swiper = new Swiper(".coursesSwiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 30,
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
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 767px
        767: {
            slidesPerView: 2,
            spaceBetween: 30
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
    spaceBetween: 30,

    effect: "cards",
    grabcursor: true,

    // effect: "flip",

});