const nav = document.querySelector("#navbartrig");
const glass = document.querySelector("#glasses");
const circle = document.querySelector("#circle");
glass.addEventListener("scroll", () => {
  if (glass.scrollTop > 100) {
    nav.classList.add("navbar__background");
    circle.classList.remove("circle12");
  } else {
    nav.classList.remove("navbar__background");
    circle.classList.add("circle12");
  }
});
var $window = $(window),
  $body = $("body"),
  $wrapper = $("#wrapper");
$(window).on("load", () => {
  $(".thumb").poptrox({
    onPopupClose: () => $body.removeClass("is-covered"),
    onPopupOpen: () => $body.addClass("is-covered"),
    baseZIndex: 10001,
    useBodyOverflow: false,
    usePopupEasyClose: true,
    overlayColor: "#000000",
    overlayOpacity: 0.75,
    popupLoaderText: "",
    fadeSpeed: 500,
    usePopupDefaultStyling: false,
  });
});
