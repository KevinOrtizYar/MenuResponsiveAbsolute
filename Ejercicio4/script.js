document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const menuBtn = document.querySelector(".icono-hamburguesa");
  const closeBtn = document.querySelector(".cerrar-menu");
  const submenuToggle = document.querySelector(".submenu-toggle");

  menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
  });

  submenuToggle.addEventListener("click", (e) => {
    e.preventDefault();
    submenuToggle.classList.toggle("active");
  });
});
