document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector("#main-menu");
  const backdrop = document.querySelector(".nav-backdrop");
  const topbar = document.querySelector(".topbar");

  if (!menuButton || !mainNav || !backdrop || !topbar) {
    return;
  }

  const setMenuState = (open) => {
    menuButton.setAttribute("aria-expanded", String(open));
    topbar.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  };

  const closeMenu = () => {
    setMenuState(false);
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  backdrop.addEventListener("click", closeMenu);

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) {
      closeMenu();
    }
  });

  closeMenu();
});
