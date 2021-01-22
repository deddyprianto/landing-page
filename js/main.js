(function ($) {
  "use strict";
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    pagination: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Window Resize Mobile Menu Fix
  mobileNav();
  // Scroll animation init
  window.sr = new scrollReveal();

  // Menu Dropdown Toggle
  if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function () {
      $(this).toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    });
  }

  $(document).ready(function () {
    $('a[href^="#home"]').addClass("active");
    $(".menu-item").on("click", function (e) {
      e.preventDefault();
      var athis = this;
      var target = this.hash,
        menu = target;

      var $target = $(target);
      $(".glass")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top,
          },
          700,
          "swing",
          function () {
            window.location.hash = target;
            $(".menu-item").removeClass("active");
            $(athis).addClass("active");
          }
        );
    });
    $(window).scroll(function (event) {
      var scrollPos = $(document).scrollTop() + 80;
      if (scrollPos === 0) {
        $('a[href^="#welcome"]').addClass("active");
        return;
      }
      $(".menu-item")
        .not('[href=""]')
        .not('[href="javascript:;"]')
        .each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));

          if (
            refElement.position().top <= scrollPos &&
            refElement.position().top + refElement.height() > scrollPos
          ) {
            $(".menu-item").removeClass("active");
            currLink.addClass("active");
          } else {
            currLink.removeClass("active");
          }
        });
    });
  });

  // Window Resize Mobile Menu Fix
  $(window).on("resize", function () {
    mobileNav();
  });

  // Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $(".submenu").on("click", function () {
      if (width < 992) {
        $(".submenu ul").removeClass("active");
        $(this).find("ul").toggleClass("active");
      }
    });
  }
})(window.jQuery);
