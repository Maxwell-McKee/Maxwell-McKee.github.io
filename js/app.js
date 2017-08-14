$( document ).ready(function() {
  console.log("Ready!");
  
  $(".buttonOuter").hover(function() {
    $(this).animate(
      {backgroundColor: "#2F2F2F",
       top: "+=5px"},
      100, function() {}
    )},              function() {
    $(this).animate(
      {backgroundColor: "#000000",
       top:"-=5px"},
      100, function() {}     
    )})
});