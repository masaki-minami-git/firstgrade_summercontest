//ロゴ、フェードアウトの時間
$(window).on('load', function () {
    $("#splash").delay(1600).fadeOut('slow');
    $("#splash_logo").delay(1300).fadeOut('slow');
});
function ScrollTimelineAnime() {
    $('.timeline li').each(function () {
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var startPoint = 200;
        if (scroll >= elemPos - windowHeight - startPoint) {
            var H = $(this).outerHeight(true)
            var percent = (scroll + startPoint - elemPos) / (H / 2) * 100;
            if (percent > 100) {
                percent = 100;
            }
            $(this).children('.border-line').css({
                height: percent + "%",
            });
        }
    });
}
// タイムライン
$(window).on('scroll', function () {
    ScrollTimelineAnime();
});
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});
AOS.init({
    offset: 100,
    duration: 1000,
    easing: 'ease',
    delay: 100,
    once: false,
    anchorPlacement: 'bottom-center',
});
$('.modal01').modaal({
    width: 780,
    height: 450,
});
luxy.init();
$(document).ready(function () {
    $('.drawer').drawer();
});