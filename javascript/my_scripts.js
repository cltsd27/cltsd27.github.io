var main = function () {
    $('#topBar').click(function () {
        $('.sidePanel').animate({
            left: '0px'
        }, 200);
        $('body').animate({
            left: '350px'
        }, 200);
    });
    $('#close').click(function () {
        $('.sidePanel').animate({
            left: '-350px'
        }, 200);
        $('body').animate({
            left: '0px'
        }, 200);
    });
};
$(document).ready(main);