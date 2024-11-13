AOS.init({
  duration: 800,

  easing: "ease-in-out",

  once: true,
});
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");

  const navbarCollapse = document.getElementById("navbarContent");

  const toggleButton = document.querySelector(".navbar-toggler");

  links.forEach((link) => {
    link.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        // Fermer le menu

        toggleButton.click();
      }
    });
  });
});
