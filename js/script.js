

$(document).ready(function () {

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


    // make menu

    $(".make_wrapper1 ul li").hover(function () {
        $(this).toggleClass('mhv');

        console.log(this);
    });


});
