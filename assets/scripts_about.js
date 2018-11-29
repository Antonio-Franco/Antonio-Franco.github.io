$(document).ready(function() {
  $("#title").animate({ position: "relative", bottom: "750px" }, 0);
  $("#oof").animate({ position: "relative", bottom: "750px" }, 0);

  $("#wiki-b").animate({ opacity: "0" }, 0);
  $("#antonio-b").animate({ opacity: "0" }, 0);
  $("#egg-b").animate({ opacity: "0" }, 0);

  $("#oof").animate({ position: "relative", bottom: "0px" }, 500);
  $("#title")
    .delay(500)
    .animate({ position: "relative", bottom: "0%" }, 500);

  $("#wiki-b")
    .delay(750)
    .animate({ opacity: "1" }, 500);
  $("#antonio-b")
    .delay(750)
    .animate({ opacity: "1" }, 500);
  $("#egg-b")
    .delay(750)
    .animate({ opacity: "1" }, 500);

  // mouse hover
  $("#oof").click(function(event) {
    $("#oof2").toggle(100);
    $("#oof2")
      .delay(500)
      .toggle(100);
  });

  //buttons
  $("#wiki-b").click(function(event) {
    $("#wiki").show(500);
    $("#antonio").hide(500);
    $("#egg").hide(500);
  });

  $("#antonio-b").click(function(event) {
    $("#wiki").hide(500);
    $("#antonio").show(500);
    $("#egg").hide(500);
  });

  $("#egg-b").click(function(event) {
    $("#wiki").hide(500);
    $("#antonio").hide(500);
    $("#egg").show(500);
  });

  // smooth scroll effct

  $(".button").on("click", function(event) {
    console.log("test");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $("#middle").offset().top
        },
        500
      );
  });
});
