const nav = document.querySelector("#navbartrig");
const glass = document.querySelector("#glasses");
const circle = document.querySelector("#circle");
glass.addEventListener("scroll", () => {
  if (glass.scrollTop > 100) {
    nav.classList.add("navbar__background");
    circle.classList.remove("circle12");
    const mode = document.getElementById("baca");
    mode.classList.add("mode__again");
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

const tombol = document.querySelector(".btn");
const wrapInti = document.getElementById("wrapper");
tombol.addEventListener("click", (e) => {
  let dataLocal = localStorage.getItem("theme");
  e.preventDefault();
  if (dataLocal === "dark") {
    disable();
  } else {
    enabled();
  }
});
function enabled() {
  wrapInti.classList.add("background");
  const text = document.getElementsByTagName("p");
  for (let i = 0; i < text.length; i++) {
    text[i].style.color = "white";
  }
  localStorage.setItem("theme", "dark");
}
function disable() {
  localStorage.setItem("theme", "light");
  wrapInti.classList.remove("background");
  const tulisanP = document.getElementsByTagName("p");
  for (let i = 0; i < tulisanP.length; i++) {
    tulisanP[i].style.color = "#426696";
  }
}
