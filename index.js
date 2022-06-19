

$(".navbar-toggler ").click(function () {
    $(".menu_line_one").toggleClass("menu_line_one_open");
    $(".menu_line_second").toggleClass("menu_line_two_open");
    $(".menu_line_third").toggleClass("menu_line_three_open");
})
$(".sidebar_btn").click(function () {
    $(".social_media_div").css("transform","scale(30)")
})
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(".sidebar_btn").click(function () {
    $(".social_media_div").css("transform","scale(1)");
    $(".social_media_div").addClass("social_media_div_open");
})
$(".close_social_media").click(function () {
    $(".social_media_div").removeClass("social_media_div_open");
})
anime({
    targets: '.left',
    translateX: 250,
    rotate: '1turn',
    backgroundColor: '#FFF',
    duration: 800
  });