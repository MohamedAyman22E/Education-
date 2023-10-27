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

let section = document.querySelectorAll("section");
let navList = document.querySelectorAll("header nav .navList li a");
window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY,
      offset = sec.offsetTop - 10,
      height = sec.offsetHeight,
      id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      document
        .querySelector("header nav .navList li a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("header nav .navList li a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
};
