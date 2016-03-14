var main = function () {
    $('#sideImg').click(function () {
        $('.sidePanel').animate({
            left: '0px'
        }, 200);
        $('body').animate({
            left: '250px'
        }, 200);
    });
};
$(document).ready(main);