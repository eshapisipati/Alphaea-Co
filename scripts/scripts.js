$("#test").click(function() {
  if ($("#navigation").hasClass("hidden")) {
    $("#navigation").removeClass("hidden");
    $("#navigation").addClass("navshow");
  } else {
    $("#navigation").addClass("hidden");
  }
});
