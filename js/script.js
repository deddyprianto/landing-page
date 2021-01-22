const nav = document.querySelector("#navbartrig");
const glass = document.querySelector("#glasses");
const circle = document.querySelector("#circle");
glass.addEventListener("scroll", () => {
  if (glass.scrollTop > 100) {
    //  console.log(`kamu scroll saya`);
    nav.classList.add("navbar__background");
    circle.classList.remove("circle12");
  } else {
    //  console.log(`kamu gak scroll saya`);
    nav.classList.remove("navbar__background");
    circle.classList.add("circle12");
  }
});
