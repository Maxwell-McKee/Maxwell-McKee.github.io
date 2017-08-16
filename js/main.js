$(document).ready(function() {
    console.log("Ready!");

    var scale = screen.height/912.0;
    var scaleString = "scale(" + scale + ")"
    var pct = (scale - 1) * 200 + 10;
    var pctString = pct.toString() + "% 0 0";

    $("body").css("transform",scaleString);
    $("body").css("transform-origin", pctString);    

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