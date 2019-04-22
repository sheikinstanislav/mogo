$(function () {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop;


    /*Fixed Header*/
         checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        }else {
            header.removeClass("fixed");
        }
    }

    /*Smooth scroll*/
    
    $("[data-scroll]").on("click", function (event) {
       event.preventDefault();

        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;


       $("html, body").animate({
           scrollTop: blockOffset
       }, 1000);
    });


    /*Burger Menu*/
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

    });

    /*Accordion*/
    $("[data-collapse]").on('click', function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass('active')
    });

    /*Slider*/

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});