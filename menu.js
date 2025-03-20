$(function(){
    $(".js-drawer-menu").on("click",function(){
        $(this).toggleClass("is-open");
        $(".l-aside").toggleClass("is-open");
        $(".overlay").toggleClass("is-open");
        $("body").toggleClass("is-open");
    });
    $(".overlay").on("click",function(){
        if($(this).hasClass("is-open")){
            $(this).removeClass("is-open");
            $(".js-drawer-menu").removeClass("is-open");
            $(".l-aside").removeClass("is-open");
            $("body").removeClass("is-open");
        }
    });
});

$(window).on('resize', function() {
    if ($(window).width() > 835) {
        $(".l-aside").removeClass("is-open");
        $(".overlay").removeClass("is-open");
    } else {
        $(".js-drawer-menu").removeClass("is-open");
        $("body").removeClass("is-open");
    }
    if ($(".l-aside").hasClass("is-open")){
        $("body").addClass("is-open");
    } else {
        $("body").removeClass("is-open");
    }
});
