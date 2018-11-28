$(document).ready(function() {
  $("#title1").animate({ position: "relative", right: "100%" }, 0);
  $("#title2").animate({ position: "relative", right: "100%" }, 0);
  $("#background").animate({ opacity: "0" }, 0);

  $("#topimg").animate({ opacity: "1", height: "500px" }, 1000);

  $("#title1")
    .delay(1500)
    .animate({ position: "relative", right: "0%" }, 500);
  $("#title2")
    .delay(2000)
    .animate({ position: "relative", right: "0%" }, 500);

  $("#background")
    .delay(1750)
    .animate({ opacity: "1" }, 2000);

  $("#topimg")
    .delay(500)
    .animate({ height: "500px" }, 1000);
  $("#middle")
    .delay(2500)
    .animate({ opacity: "1" }, 1000);
  // fade in when scrolling
  $(window).scroll(function() {
    $(".box").each(function(i) {
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ opacity: "1", top: "50px" }, 500);
      }
    });
  });
  // mouse hover
  $("#topimg").mouseover(function(event) {
    $(this).toggleClass("rotate");
  });

  $(".box").click(function() {
    if (
      $(this)
        .find("[class*='pic']")
        .css("display") == "none"
    ) {
      $(this)
        .find("[class*='pic']")
        .show(500);
      $(this)
        .find("[class*='arrow']")
        .toggleClass("flip unflip");
    } else {
      $(this)
        .find("[class*='pic']")
        .hide(500);
      $(this)
        .find("[class*='arrow']")
        .toggleClass("flip unflip");
    }
  });
  /*
  function loop() {
    console.log("arrow");
    $(".arrow")
      .animate({ marginTop: "-= 10px" }, 300)
      .animate({ marginTop: "+= 10px" }, 300);
    delay(600).loop();
  }
  
  function bounce(ele, times, distance, speed) {
    for (i = 0; i < times; i++) {
      console.log(i);
      ele
        .animate(
          {
            marginTop: "-=" + distance
          },
          speed
        )
        .animate(
          {
            marginTop: "+=" + distance
          },
          speed
        );
    }
  }

  bounce($(".arrow"), 10, "20px", 400);
  */
});
