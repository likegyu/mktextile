$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    $('#maintext, .slogan').css({
        'opacity': ((height - scrollTop * 3) / height)
    });
});