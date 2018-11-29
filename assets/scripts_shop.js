$(document).ready(function() {
  $("#title").animate({ position: "relative", bottom: "750px" }, 0);

  $("#middle").animate({ opacity: "0" }, 0);

  $("#title")
    .delay(0)
    .animate({ position: "relative", bottom: "0%" }, 500);

  $("#text")
    .delay(500)
    .slideToggle(500);
  $("#img")
    .delay(500)
    .slideToggle(500);

  $("#middle")
    .delay(1000)
    .animate({ opacity: "1" }, 500);
});
