
document.addEventListener("DOMContentLoaded", function () {
  // Automatically update the footer year.
  const year = document.getElementById("currentYear");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Project category filters.
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const selected = button.dataset.filter;

      filterButtons.forEach(function (item) {
        item.classList.toggle("active", item === button);
      });

      projectItems.forEach(function (item) {
        const matches =
          selected === "all" || item.dataset.category === selected;

        item.classList.toggle("d-none", !matches);
      });
    });
  });

  // Close the mobile Bootstrap navigation after clicking a link.
  const nav = document.getElementById("mainNav");

  document.querySelectorAll("#mainNav .nav-link, #mainNav .nav-cta")
    .forEach(function (link) {
      link.addEventListener("click", function () {
        if (nav && nav.classList.contains("show") && window.bootstrap) {
          window.bootstrap.Collapse.getOrCreateInstance(nav).hide();
        }
      });
    });
});
