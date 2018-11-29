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
    .delay(0)
    .animate({ opacity: "1" }, 1000);
  // fade in when scrolling
  var scrollTimer,
    lastScrollFireTime = 0;

  $(window).on("scroll", function() {
    var minScrollTime = 250;
    var now = new Date().getTime();

    function processScroll() {
      $(".box").each(function(i) {
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_object) {
          $(this)
            .stop(true, true)
            .animate({ opacity: "1" }, 100);
          $(this).addClass("translate");
        }
      });
    }

    if (!scrollTimer) {
      if (now - lastScrollFireTime > 3 * minScrollTime) {
        processScroll(); // fire immediately on first scroll
        lastScrollFireTime = now;
      }
      scrollTimer = setTimeout(function() {
        scrollTimer = null;
        lastScrollFireTime = new Date().getTime();
        processScroll();
      }, minScrollTime);
    }
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

  // smooth scroll effct

  $('a[href^="#"]').on("click", function(event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 64
          },
          500
        );
    }
  });

  /*
  function offsetAnchor() {
    if (location.hash.length !== 0) {
      window.scrollTo({ top: window.scrollY - 64, behavior: "smooth" });
    }
  }

  // code credit to "kind user" on stack overflow
  // Captures click events of all <a> elements with href starting with #
  $(document).on("click", 'a[href^="#"]', function(event) {
    // Click events are captured before hashchanges. Timeout
    // causes offsetAnchor to be called after the page jump.
    window.setTimeout(function() {
      offsetAnchor();
    }, 0);
  });

  // Set the offset when entering page with hash present in the url
  window.setTimeout(offsetAnchor, 0);
  */
});
