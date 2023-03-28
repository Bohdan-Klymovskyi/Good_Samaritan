const dark_theme = document.querySelector(".dark_theme");
const light_theme = document.querySelector(".light_theme");
const body = document.querySelector("body");
const hero__button1 = document.querySelector(".hero__button1");
const modal = document.querySelector(".modal");

  dark_theme.addEventListener("click", () => {
    body.classList.add("body_dark");
  })

  light_theme.addEventListener("click", () => {
    body.classList.remove("body_dark");
  })

  hero__button1.addEventListener("click", () => {
    modal.classList.remove("hidden");
  })

  window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.classList.add("hidden");
    }
  });