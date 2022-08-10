$(function() {
    $("#toggle").click(function() {
        $("#list").slideToggle(450);
        $(".container").toggleClass("margin");
    });
});
