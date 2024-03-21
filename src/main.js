const menuBars = document.querySelector("#menuBars");
const iconBars = document.querySelector(".fa-bars");
const navMobile = document.querySelector("#navMenu");

menuBars.addEventListener("click", function () {
  iconBars.classList.toggle("fa-x");
  navMobile.classList.toggle("hidden");
});
