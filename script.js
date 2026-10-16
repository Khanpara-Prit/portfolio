(() => {
  const root = document.documentElement;
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".primary-nav");
  const themeButton = document.querySelector(".theme-toggle");
  const backToTopButton = document.querySelector(".back-to-top-button");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function setTheme(theme) {
    root.dataset.theme = theme;
    const isLight = theme === "light";
    themeButton.setAttribute("aria-label", `Switch to ${isLight ? "dark" : "light"} theme`);
    themeButton.title = `Switch to ${isLight ? "dark" : "light"} theme`;
    document.querySelector('meta[name="theme-color"]').content = isLight ? "#f8f7fb" : "#0b0b0f";
  }

  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem("portfolio-theme");
  } catch (error) {
    console.warn("Theme preference could not be read from local storage.", error);
  }
  setTheme(savedTheme === "light" ? "light" : "dark");

  themeButton.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch (error) {
      console.warn("Theme preference could not be saved to local storage.", error);
    }
  });

  function closeMenu({ restoreFocus = false } = {}) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("is-open");
    if (restoreFocus) menuButton.focus();
  }

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      closeMenu({ restoreFocus: true });
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 680) closeMenu();
  });

  const revealElements = document.querySelectorAll(".reveal");
  const sectionLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
  const sections = [...document.querySelectorAll("main section[id]")];

  if ("IntersectionObserver" in window && !reducedMotion.matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  if ("IntersectionObserver" in window) {
    const activeSections = new Map();
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => activeSections.set(entry.target.id, entry.isIntersecting));
      const activeSection = sections.find((section) => activeSections.get(section.id));
      if (!activeSection) return;
      sectionLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${activeSection.id}`;
        link.classList.toggle("is-active", isActive);
        if (isActive) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-30% 0px -55% 0px" });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  const filterButtons = document.querySelectorAll(".filter-button");
  const projectCards = document.querySelectorAll(".project-card");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;
      filterButtons.forEach((filterButton) => {
        const isSelected = filterButton === button;
        filterButton.classList.toggle("is-selected", isSelected);
        filterButton.setAttribute("aria-pressed", String(isSelected));
      });
      projectCards.forEach((card) => {
        const categories = card.dataset.categories.split(" ");
        card.hidden = selectedFilter !== "all" && !categories.includes(selectedFilter);
      });
    });
  });

  const form = document.querySelector(".contact-form");
  const formFeedback = document.querySelector(".form-feedback");
  const fields = [...form.querySelectorAll("input, textarea")];
  const errorMessages = {
    name: "Please enter at least 2 characters for your name.",
    email: "Please enter a valid email address.",
    subject: "Please enter a subject of at least 3 characters.",
    message: "Please enter a message of at least 10 characters."
  };

  function validateField(field) {
    const errorElement = document.getElementById(`${field.name}-error`);
    const hasError = !field.validity.valid;
    field.setAttribute("aria-invalid", String(hasError));
    errorElement.textContent = hasError ? errorMessages[field.name] : "";
    return !hasError;
  }

  fields.forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true") validateField(field);
      formFeedback.textContent = "";
      formFeedback.classList.remove("is-error");
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const isValid = fields.map(validateField).every(Boolean);
    if (!isValid) {
      formFeedback.textContent = "Please check the highlighted fields.";
      formFeedback.classList.add("is-error");
      fields.find((field) => !field.validity.valid)?.focus();
      return;
    }
    formFeedback.textContent = "Your details look good, but this demo cannot send messages yet. Please email hello@example.com directly.";
    formFeedback.classList.remove("is-error");
  });

  document.getElementById("copyright-year").textContent = String(new Date().getFullYear());
  document.querySelector(".back-to-top").addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "instant" : "smooth" });
  });
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "instant" : "smooth" });
  });
  function updateBackToTop() {
    const isVisible = window.scrollY > 480;
    backToTopButton.classList.toggle("is-visible", isVisible);
    backToTopButton.setAttribute("aria-hidden", String(!isVisible));
    backToTopButton.tabIndex = isVisible ? 0 : -1;
  }

  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();
})();
