$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#initially-showing1").fadeToggle();
    $("#initially-hidden1").fadeToggle();
  });
});

$(document).ready(function() {
  $(".clickable2").click(function() {
    $("#initially-showing2").fadeToggle();
    $("#initially-hidden2").fadeToggle();
  });
});
