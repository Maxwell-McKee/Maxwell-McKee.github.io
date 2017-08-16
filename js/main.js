$(document).ready(function() {
    console.log("Ready!");

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