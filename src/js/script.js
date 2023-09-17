const swiper = new Swiper(".coursesSwiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 30,
    // mousewheel: true,

    // effect: "fade",
    grabcursor: true,

    // effect: "cube",
    pagination: {
        el: ".swiper-pagination",
        clickable: true
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

    // effect: "cube",
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    // // Responsive breakpoints
    // breakpoints: {
    //     // when window width is >= 1px

    //     690: {
    //         slidesPerView: 1,
    //         spaceBetween: 30
    //     },
    //     // when window width is >= 767px
    //     767: {
    //         slidesPerView: 2,
    //         spaceBetween: 30
    //     },
    //     // when window width is >= 1140px
    //     1140: {
    //         slidesPerView: 3,
    //         spaceBetween: 10,
    //     }
    // }
});