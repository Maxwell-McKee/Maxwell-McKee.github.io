$(document).ready(function() {
    console.log("Ready!");

    if (screen.height > 912.0) {
        var scale = screen.height/912.0;
    } else {
        var scale = screen.height/912.0 + 0.15;
    }
    var scaleString = "scale(" + scale + ")";

    if (scale >= 1) {
        var pct = (scale - 1) * 200 + 10;
    } else {
        var pct = scale * 50 + 5;
    }
    var pctString = pct.toString() + "% 0 0";

    $("body").css("transform", scaleString);
    $("body").css("transform-origin", pctString); 

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