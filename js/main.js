let bigHeader = document.querySelector(".container_header ");
let menu = document.querySelector(".menu");
let menuI = document.querySelector(".menu i");
menu.addEventListener("click", () => {
  bigHeader.classList.toggle("active");
  if (menuI.classList.contains("fa-bars")) {
    menuI.classList.replace("fa-bars", "fa-xmark");
  } else {
    menuI.classList.replace("fa-xmark", "fa-bars");
  }
});
