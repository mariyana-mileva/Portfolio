document.addEventListener("DOMContentLoaded", function () {
  const menuText = document.querySelector(".menu-text");
  const navContainer = document.querySelector(".nav-container");

  menuText.addEventListener("click", function () {
    if (navContainer.style.display === "none" || !navContainer.style.display) {
      navContainer.style.display = "flex";
    } else {
      navContainer.style.display = "none";
    }
  });

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transition = "opacity 0.5s ease-in-out";
        entry.target.style.opacity = 1;
      } else {
        entry.target.style.transition = "opacity 0.5s ease-in-out";
        entry.target.style.opacity = 0;
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });

  const navLinks = document.querySelectorAll(".nav-container a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      scrollToSection(targetId);
    });
  });
});
