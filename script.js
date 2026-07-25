const SITE_CONFIG = {
  effectiveDate: "May 24, 2026",
  contactEmail: "leaves0819@gmail.com",
  developerName: "Dahon",
  portfolioUrl: "https://devdahon.github.io/portfolio",
};

function applyPolicyConfig() {
  document.querySelectorAll("[data-effective-date]").forEach((node) => {
    node.textContent = SITE_CONFIG.effectiveDate;
  });

  document.querySelectorAll("[data-developer-name]").forEach((node) => {
    node.textContent = SITE_CONFIG.developerName;
  });

  document.querySelectorAll("[data-contact-email]").forEach((node) => {
    node.textContent = SITE_CONFIG.contactEmail;
  });

  document.querySelectorAll("[data-contact-link]").forEach((node) => {
    node.setAttribute("href", `mailto:${SITE_CONFIG.contactEmail}`);
  });

  document.querySelectorAll("[data-portfolio-link]").forEach((node) => {
    node.setAttribute("href", SITE_CONFIG.portfolioUrl);
  });
}

function setupActiveNavState() {
  const links = [...document.querySelectorAll(".nav-link")];
  const sectionMap = new Map(
    links
      .map((link) => {
        const id = link.getAttribute("href");
        if (!id?.startsWith("#")) return null;
        const section = document.querySelector(id);
        return section ? [id, section] : null;
      })
      .filter(Boolean),
  );

  if (!sectionMap.size || !("IntersectionObserver" in window)) return;

  const syncActive = (activeId) => {
    links.forEach((link) => {
      const isActive = link.getAttribute("href") === activeId;
      link.classList.toggle("is-active", isActive);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible?.target?.id) return;
      syncActive(`#${visible.target.id}`);
    },
    {
      rootMargin: "-15% 0px -50% 0px",
      threshold: [0.1, 0.4, 0.8],
    },
  );

  for (const [, section] of sectionMap.entries()) {
    observer.observe(section);
  }
}

function setupSearchFilter() {
  const searchInput = document.getElementById("search-input");
  const searchClear = document.getElementById("search-clear");
  const sections = document.querySelectorAll(".doc-section");

  if (!searchInput) return;

  const handleSearch = () => {
    const query = searchInput.value.trim().toLowerCase();
    
    if (searchClear) {
      searchClear.style.display = query.length > 0 ? "block" : "none";
    }

    sections.forEach((section) => {
      if (!query) {
        section.style.display = "block";
        section.classList.remove("is-focused");
        return;
      }

      const textContent = section.textContent.toLowerCase();
      const isMatch = textContent.includes(query);
      section.style.display = isMatch ? "block" : "none";
      if (isMatch) {
        section.classList.add("is-focused");
      } else {
        section.classList.remove("is-focused");
      }
    });
  };

  searchInput.addEventListener("input", handleSearch);

  if (searchClear) {
    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      handleSearch();
      searchInput.focus();
    });
  }
}

function setupInteractiveControls() {
  // Copy Email button
  const copyBtn = document.getElementById("copy-email-btn");
  const toast = document.getElementById("toast");

  if (copyBtn && toast) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(SITE_CONFIG.contactEmail).then(() => {
        toast.classList.add("show");
        setTimeout(() => {
          toast.classList.remove("show");
        }, 2500);
      });
    });
  }

  // Print button
  const printBtn = document.getElementById("print-btn");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // Back to top button
  const backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTop.classList.add("is-visible");
      } else {
        backToTop.classList.remove("is-visible");
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyPolicyConfig();
  setupActiveNavState();
  setupSearchFilter();
  setupInteractiveControls();
});
