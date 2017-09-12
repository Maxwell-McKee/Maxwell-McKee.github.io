/*
 * Author: Maxwell McKee
 * Last updated 9/11/17
 * TODO: Fix scaling to not be scripted
 *       Remove jQuery dependencies where possible
 */

$(document).ready(function() {
    console.log("Ready");

    if (screen.height >= 912.0) {
        var scale = screen.height / 912.0;
    } else {
        var scale = screen.height / 912.0 + 0.15;
    }
    var scaleString = "scale(" + scale + ")";

    $("body").css("transform", scaleString);

    var htmlMinWidth = $("body").width() * scale;
    $("html").css("min-width", htmlMinWidth + "px");

    $(".buttonOuter").hover(function() {
        $(this).animate({
                backgroundColor: "#2F2F2F",
                top: "-=2px"
            },
            100,
            function() {}
        )
    }, function() {
        $(this).animate({
                backgroundColor: "#000000",
                top: "+=2px"
            },
            100,
            function() {}
        )
    })
});