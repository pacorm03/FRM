$("a.nav-link, .navbar-brand").on("mouseenter", handlerIn).on("mouseleave",handlerOut);

function handlerIn(){
    $(this).addClass("fc-darkpurple");
    console.log($(this));
}

function handlerOut(){
    $(this).removeClass("fc-darkpurple");
    console.log("this");
}


$(".projectButtons").on("mouseenter", handlerInProjects).on("mouseleave",handlerOutProjects);

function handlerInProjects(){
    $(this).addClass("shadow-current");
}

function handlerOutProjects(){
    $(this).removeClass("shadow-current");
}

revealProjects();
swiperCarousel();
function revealProjects() {
    if (!("IntersectionObserver" in window)) return;

    const projectRows = $(".projectButtons").parent(".row");

    const observer = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    projectRows.addClass("project-reveal");

    projectRows.each(function () {
        observer.observe(this);
    });
};


function swiperCarousel() {
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    new Swiper(".softwareSwiper", {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 10,
        speed: 9500,

        autoplay: reduceMotion ? false : {
            delay: 0,
            disableOnInteraction: false
        },

        breakpoints: {
            576: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            992: {
                slidesPerView: 6,
                spaceBetween: 60
            }
        }
    });
}