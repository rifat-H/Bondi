$(document).ready(function () {

    // mixitup menu active color
    $('.make_wrapper1 ul li:first-child').addClass('mhv');

    $('.make_wrapper1 ul li').click(function () { 
        $('ul li').removeClass('mhv');
        $(this).addClass("mhv");
    });

    //navbar menu Hover color
    $(".nav-link").hover(function () {
        $(this).toggleClass('aq');
        console.log(this);
    });

    //navbar search hover color
    $(".btn2 i").hover(function () {
        $(this).toggleClass('aq');
        console.log(this);
    });

    // button hover : except navbar button
    $("button").hover(function () {
        $(this).toggleClass('jqb');
        console.log(this);
    });


    // make wrapper 2

    $(".make_wrapper2").hover(function () {
        $(this).toggleClass('mjh');
        console.log(this);
    });

});
