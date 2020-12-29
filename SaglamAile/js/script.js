$(function () {


    let index2 = 0;
    let slider = $(".slider-content");


    // Create dots for slider

    function createDots() {
        for (let i = 0; i < $(".slider img").length - 1; i++) {
            let dot = "<li> </li>"
            $(".dots ul").append(dot);
        }
    }
    createDots();

    // Slider on click   *******************


    function slideOnClick() {
        $(document).on("click", ".dots li", function () {
            let indexDot = $(this).index();

            $(".dots li").removeClass("active-dot");
            $(this).addClass("active-dot");

            slider.css("opacity", "0");
            slider.eq(indexDot).css("opacity", "1");

            $(".img-content>div").addClass("d-none").removeClass("d-block").css("opacity", "0");
            $(".img-content>div").eq(indexDot).removeClass("d-none").addClass("d-block").css("opacity", "1").css('transform', 'translate(0px, -150px)').animate({ transform: 'translateY(-100px)' });

            $(".dots h3").addClass("d-none").removeClass("d-block").css("opacity", "0");
            $(".dots h3").eq(indexDot).removeClass("d-none").addClass("d-block").css("opacity", "1");

        });
    }

    slideOnClick()



    setInterval(() => {
        index2++;
        if (index2 > slider.length - 1) {
            index2 = 0;
        }
        slider.css("opacity", "0").removeClass('animate');
        slider.eq(index2).css("opacity", "1").addClass('animate');

        $(".img-content>div").addClass("d-none").removeClass("d-block").css("opacity", "0");
        $(".img-content>div").eq(index2).removeClass("d-none").addClass("d-block").css("opacity", "1").css('transform', 'translate(0px, -150px)').animate({ transform: 'translate(0px, 0px)' },500);

        $(".dots li").removeClass("active-dot");
        $(".dots li").eq(index2).addClass("active-dot");

        $(".dots h3").addClass("d-none").removeClass("d-block").css("opacity", "0");
        $(".dots h3").eq(index2).removeClass("d-none").addClass("d-block").css("opacity", "1");
    }, 5000);



    // Burger Menu / Aside Nav show/hide

    $(document).on("click", ".openmenu", function () {
        $(".menu span").addClass("active1");
        $(".menu").removeClass("openmenu").addClass("closemenu");
        $(".head-right").addClass("activeside");
        $("header").addClass("fixed-header");
        $("section").css("top", "147px");
        $("footer").css("bottom", "-147px");
        $("#footer").css("bottom", "0px");
        $(".aside-nav").addClass("show-me");
        setTimeout(function () {
            $(".menu span").addClass("active2");
        }, 300);
        setTimeout(function () {
            $(".menu").css("transform", "rotate(45deg)");
        }, 600);

    })

    $(document).on("click", ".closemenu", function () {
        $(".menu").removeClass("closemenu").addClass("openmenu")
        $(".aside-nav").removeClass("show-me");
        $(".head-right").removeClass("activeside");
        $("header").removeClass("fixed-header");
        $("section").css("top", "0");
        $("footer").css("bottom", "-60px");
            $(".menu").css("transform", "rotate(0deg)");
            setTimeout(function () {
                $(".menu span").removeClass("active2");
            }, 300);
            setTimeout(function () {
                $(".menu span").removeClass("active1");
            }, 600);
    })


    // fixed nav on scroll*********************************
    $(window).scroll(function () {
        if ($(window).scrollTop() > 147) {
            $(".small-nav").addClass("fixed-nav")
        }
        else {
            $(".small-nav").removeClass("fixed-nav")
        }
    });


    // Branches map menu ***********************************************

    $(document).on("click", ".mapmarker", function () {
        $(this).toggleClass("openmap");
        if ($(this).hasClass("openmap")) {
            $(".map-ul").css("display", "block");
        }
        else (
            $(".map-ul").css("display", "none")
        );

    });



    //Doctor - Accordion*************************************************

    $(document).on("click", ".accord", function () {
        $(this).closest('.row').find('.accord-content').slideToggle();
        $(this).toggleClass('hide-accord');
        if ($(this).hasClass("hide-accord")) {
            $(this).find('i').css("transform", "rotate(-90deg)");
        }
        else {
            $(this).find('i').css("transform", "rotate(0deg)");
        }
    })



    // Contact icons ************************

    $(document).on("mouseenter", ".msg", function () {
        $(".msg").css("transform", "rotate(360deg)")
        $(".msg-bord1").removeClass("d-none");
        $(".msg-bord2").removeClass("d-none")
        $(".contacts li").css("box-shadow", "0 0 15px 0 rgba(0, 0, 0, 0.2)");
        $(".contacts li").css("opacity", "1");
        $(".contacts li:first-child").css("bottom", "276px");
        $(".contacts li:nth-child(2)").css("bottom", "204px");
        $(".contacts li:last-child").css("bottom", "132px");
    })

    $(document).on("mouseleave", ".msg", function () {
        $(".msg").css("transform", "rotate(0deg)");
        $(".msg-bord1").addClass("d-none");
        $(".msg-bord2").addClass("d-none")
        $(".contacts li").css("box-shadow", "0 0 0 0 rgba(0, 0, 0, 0)");
        $(".contacts li:first-child").css("bottom", "80px");
        $(".contacts li:nth-child(2)").css("bottom", "80px");
        $(".contacts li:last-child").css("bottom", "80px");
        $(".contacts li").css("opacity", "0");
    })


    // Payment **********************************************************

    $(document).on("keyup", "#price", function () {

        let price = $("#price").val();

        if (parseInt(price) > 500) {
            price = 500;
        }


        $(".sum").css({
            "background-color": "#159ee3",
            "color": "white"
        });
        $(".sum p").text(price + "AZN");


        if (!$("#price").val()) {
            $(".sum").css({
                "background-color": "transparent",
                "color": "#7c7c7c"
            });
            $(".sum p").text("0 AZN");
        }

    });


    // Symptoms map ***********************************

    // select area of the man's map
    $(document).on("mouseover", "map[name = 'mapman'] area", function () {
        $("#man").attr("src", `${$(this).attr("data-part")}`);
    });

    $(document).on("mouseout", "map[name = 'mapman'] area", function () {
        $("#man").attr("src", "assert/images/man_empty.png");
    })

    // select area of the woman's map
    $(document).on("mouseover", "map[name = 'mapwoman'] area", function () {
        $("#woman").attr("src", `${$(this).attr("data-part")}`);
    });

    $(document).on("mouseout", "map[name = 'mapwoman'] area", function () {
        $("#woman").attr("src", "assert/images/man_empty.png");
    })


    //  redirect to symptoms 

    $(document).on("click", "map area", function () {
        $(".symptoms-map").css("display", "none");
        $(".symptoms-list").css("display", "block");
        $(".symp-search").toggleClass("d-none")
    });

    $(document).on("click", "map area[data-tags= '4914']", function () {
        $(".symptoms-map").css("display", "none");
        $(".symptoms-list").css("display", "block");
        $(".heart-symp").css("display", "none");

    });

    $(document).on("click", "map area[data-tags= '4919']", function () {
        $(".symptoms-map").css("display", "none");
        $(".symptoms-list", ".symptoms-list div").css("display", "block");
        $(".head-symp").css("display", "none");

    });



    $(document).on("click", ".symp-search", function () {
        $(".symptoms-map").css("display", "none");
        $(".symptoms-list").css("display", "block");
        $(".symp-search").toggleClass("d-none")
    })

    $(document).on("click", ".return-map", function () {
        $(".symptoms-map").css("display", "block");
        $(".symptoms-list").css("display", "none");
        $(".symp-search").toggleClass("d-none")
    })
})

