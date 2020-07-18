$(function () {
    $(".little-nav").on("click", function () {
        var flag = $(this).children("ul").css("display");
        if (flag == "none") {
            $(this).children("ul").slideDown();
        } else {
            $(this).children("ul").slideUp();
        }
    });
    $(".little-nav").on("click", "li", function () {
        $(this).addClass("current").siblings().removeClass();
        var index = $(this).index();
        $(".nav").children("ul").children().eq(index).addClass("current").siblings().removeClass();
        $(".section").children(".item").eq(index).show().siblings().hide();
        var images = ["./images/tm-bg-1.jpeg", "./images/tm-bg-2.jpeg", "./images/tm-bg-3.jpeg", "./images/tm-bg-4.jpeg", "./images/tm-bg-5.jpeg", "./images/tm-bg-6.jpeg"];
        $("body").css("backgroundImage", "url(" + images[index] + ")");
    });
    $(".nav").on("click", "li", function () {
        $(this).addClass("current").siblings().removeClass();
        var index = $(this).index();
        $(".little-nav").children("ul").children().eq(index).addClass("current").siblings().removeClass();
        $(".section").children(".item").eq(index).fadeIn(1500).siblings().css("display", "none");
        var images = ["./images/tm-bg-1.jpeg", "./images/tm-bg-2.jpeg", "./images/tm-bg-3.jpeg", "./images/tm-bg-4.jpeg", "./images/tm-bg-5.jpeg", "./images/tm-bg-6.jpeg"];
        $("body").css("backgroundImage", "url(" + images[index] + ")");
    });
    $(".section2 .contentBx").on("mouseover", function () {
        $(this).children(".mask").css("opacity", 1);
        $(this).children("img").css("transform", "scale(1) translateZ(0)");
        var height = $(this).height();
        if (height <= 350) {
            $(this).children(".name").stop().animate({
                top: 100,
            }, 300);
            $(this).children(".desc").stop().animate({
                top: 170,
                opacity: "show"
            }, 300);
        } else {
            $(this).children(".name").stop().animate({
                top: 130,
            }, 300);
            $(this).children(".desc").stop().animate({
                top: 200,
                opacity: "show"
            }, 300);
        }
    });
    $(".section2 .contentBx").on("mouseout", function () {
        $(this).children(".mask").css("opacity", 0);
        $(this).children("img").css("transform", "scale(1.2) translateZ(0)");
        var height = $(this).height();
        if (height <= 350) {
            $(this).children(".name").stop().animate({
                top: 130,
            }, 300);
            $(this).children(".desc").stop().animate({
                top: 200,
                opacity: "hide"
            }, 300);
        } else {
            $(this).children(".name").stop().animate({
                top: 160,
            }, 300);
            $(this).children(".desc").stop().animate({
                top: 230,
                opacity: "hide"
            }, 300);
        }
    });
    $(".section3 .contentBx").on("mouseover", function () {
        $(this).children(".mask").css("opacity", 1);
        $(this).children("img").css("transform", "scale(1) translateZ(0)");
        var height = $(this).height();
        if (height <= 220) {
            $(this).children(".name").stop().animate({
                top: 40,
            }, 300);
            $(this).children(".desc").stop().animate({
                top: 90,
                opacity: "show"
            }, 300);
        } else {
            $(this).children(".name").stop().animate({
                top: 70,
            }, 300);
            $(this).children(".desc").stop().animate({
                top: 120,
                opacity: "show"
            }, 300);
        }
    });
    $(".section3 .contentBx").on("mouseout", function () {
        $(this).children(".mask").css("opacity", 0);
        $(this).children("img").css("transform", "scale(1.2) translateZ(0)");
        var height = $(this).height();
        if (height <= 160) {
            $(this).children(".name").stop().animate({
                top: 60,
            }, 300);
            $(this).children(".desc").stop().animate({
                top: 110,
                opacity: "hide"
            }, 300);
        } else {
            $(this).children(".name").stop().animate({
                top: 90,
            }, 300);
            $(this).children(".desc").stop().animate({
                top: 140,
                opacity: "hide"
            }, 300);
        }

    });
    console.log($(window)[0].innerWidth);

})