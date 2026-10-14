
document.addEventListener("DOMContentLoaded", () => {
  // Current year in footer
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Project category filtering
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;

      filterButtons.forEach((item) => {
        item.classList.toggle("active", item === button);
      });

      projectItems.forEach((project) => {
        const categoryMatches =
          selectedFilter === "all" ||
          project.dataset.category === selectedFilter;

        project.classList.toggle("hide-project", !categoryMatches);
      });
    });
  });

  // Close mobile navigation after clicking a navigation link
  const navigation = document.getElementById("navigation");

  document.querySelectorAll("#navigation .nav-link, #navigation .nav-button")
    .forEach((link) => {
      link.addEventListener("click", () => {
        if (
          navigation &&
          navigation.classList.contains("show") &&
          window.bootstrap
        ) {
          window.bootstrap.Collapse
            .getOrCreateInstance(navigation)
            .hide();
        }
      });
    });

  // Highlight the current section in the navigation
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".navbar .nav-link");

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          navLinks.forEach((link) => {
            const isActive =
              link.getAttribute("href") === `#${entry.target.id}`;

            link.classList.toggle("active", isActive);
          });
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }
});
