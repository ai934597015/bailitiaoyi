var rs = function () {
    var dw = document.documentElement.clientWidth;
    $("body").css({fontSize: 1 * dw / 360 + "em"})
};

function tc(event) {
    event.preventDefault()
}

function notouch() {
    document.addEventListener("touchmove", tc, false)
}

$(function () {
    rs();
    notouch();
});

$(window).resize(function () {
    rs();
});