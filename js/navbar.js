function checkWidth() {
    if (toggle === true) {
        if (window.matchMedia("(min-width: 767px)").matches) {
            $("body").removeAttr("style");
        } else {
            $("body").attr("style", "overflow-y: hidden");
        }
    }
}
$(window).resize(checkWidth);

$(".navbar-toggler").on("click", function() {
    var toggleClass = $(this).children();
    if (toggleClass.attr("class") === "fa fa-bars") {
        toggleClass.removeClass("fa fa-bars").addClass("fa fa-times");
        $("body").attr("style", "overflow-y: hidden");
        toggle = true;
    } else {
        toggleClass.removeClass("fa fa-times").addClass("fa fa-bars");
        $("body").removeAttr("style");
        toggle = false;
    }
})