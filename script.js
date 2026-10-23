/* =========================================================
   NOVAFLOW DIGITAL
   Main Interactive Vanilla JavaScript (Dark Pastel Theme)
   Connected Agency Email: founder@novaflowdigital.co
========================================================= */

window.__NOVAFLOW_INIT__ = true;
const AGENCY_EMAIL = "founder@novaflowdigital.co";
const WHATSAPP_NUMBER = "918849506614";

/* =========================================================
   HEADER SCROLL STATE
========================================================= */
const header = document.getElementById("siteHeader");
window.addEventListener("scroll", () => {
  if (!header) return;
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* =========================================================
   MOBILE MENU (WITH HAMBURGER TO 'X' ANIMATION)
========================================================= */
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

function closeMobileMenu() {
  if (!mobileMenu || !menuButton) return;
  mobileMenu.classList.remove("open");
  menuButton.classList.remove("active");
  menuButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    menuButton.classList.toggle("active", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
}

/* =========================================================
   TOAST NOTIFICATION HELPER
========================================================= */
const toastNotification = document.getElementById("toastNotification");
const toastMessage = document.getElementById("toastMessage");
let toastTimeout;

function showToast(message) {
  if (!toastNotification || !toastMessage) return;
  toastMessage.textContent = message;
  toastNotification.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastNotification.classList.remove("show");
  }, 3800);
}

/* =========================================================
   OFFICIAL AGENCY LOGO (N.png) — HEADER + HERO + FOOTER
========================================================= */
try {
  localStorage.removeItem("novaflow_custom_logo");
} catch {
  // Ignore storage restrictions
}

const brandLogoImgs = document.querySelectorAll("[data-brand-logo-img]");
brandLogoImgs.forEach((img) => {
  if (img.getAttribute("src") !== "N.png") {
    img.setAttribute("src", "N.png");
  }
});

/* =========================================================
   PASTEL PALETTE MOOD SWITCHER (MEDIUM PASTEL vs SOFT PASTEL)
========================================================= */
const paletteToggleBtn = document.getElementById("paletteToggleBtn");
const paletteLabel = document.getElementById("paletteLabel");

if (paletteToggleBtn) {
  paletteToggleBtn.addEventListener("click", () => {
    const isSoft = document.body.classList.toggle("soft-pastel-mode");
    if (paletteLabel) {
      paletteLabel.textContent = isSoft ? "Soft Pastel" : "Medium Pastel";
    }
    showToast(
      isSoft
        ? "Switched to Soft Daylight Pastel palette"
        : "Switched to Balanced Medium Pastel palette"
    );
  });
}

/* =========================================================
   INTERACTIVE HERO VISUAL CARD STEP SWITCHER
========================================================= */
const heroStepButtons = document.querySelectorAll("[data-hero-step]");
const heroStepDetail = document.getElementById("heroStepDetail");
const heroVisualTagline = document.getElementById("heroVisualTagline");

const heroStepsData = {
  "01": {
    tagline: "01 · Strategy & UX Architecture",
    detail: "Conversion sitemaps, buyer journey flows & interactive Figma wireframes."
  },
  "02": {
    tagline: "02 · Medium Pastel Visual Direction",
    detail: "Bespoke typography, balanced pastel color systems & unmistakable brand authority."
  },
  "03": {
    tagline: "03 · Clean Full-Stack Engineering",
    detail: "99+ PageSpeed HTML/CSS/JS, React & Node.js builds with direct email routing."
  }
};

heroStepButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    heroStepButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const stepKey = btn.getAttribute("data-hero-step");
    const info = heroStepsData[stepKey];
    if (info && heroStepDetail && heroVisualTagline) {
      heroVisualTagline.textContent = info.tagline;
      heroStepDetail.textContent = info.detail;
    }
  });
});

/* =========================================================
   PORTFOLIO FILTER
========================================================= */
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");

    const selectedCategory = filter.dataset.filter;

    projects.forEach((project) => {
      const categories = (project.dataset.category || "").split(" ");
      if (selectedCategory === "all" || categories.includes(selectedCategory)) {
        project.classList.remove("hidden");
      } else {
        project.classList.add("hidden");
      }
    });
  });
});


/* =========================================================
   SERVICE CARD CTA -> AUTO-SELECT SERVICE IN FORM
========================================================= */
const serviceCtaLinks = document.querySelectorAll(".service-cta-link");
const serviceSelect = document.getElementById("service");

serviceCtaLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const targetService = link.dataset.service;
    if (serviceSelect && targetService) {
      serviceSelect.value = targetService;
    }
  });
});

/* =========================================================
   PROJECT CASE STUDY MODAL
========================================================= */
const projectModal = document.getElementById("projectModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalDesc = document.getElementById("modalDesc");
const modalChallenge = document.getElementById("modalChallenge");
const modalSolution = document.getElementById("modalSolution");
const modalMetrics = document.getElementById("modalMetrics");
const modalInquireBtn = document.getElementById("modalInquireBtn");
const modalLiveBtn = document.getElementById("modalLiveBtn");
const projectLinks = document.querySelectorAll(".project-link");

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.remove("open");
  projectModal.setAttribute("aria-hidden", "true");
}

projectLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    if (!projectModal) return;

    if (modalTitle) modalTitle.textContent = link.dataset.projectTitle || "Project Case Study";
    if (modalCategory) modalCategory.textContent = link.dataset.projectCategory || "FEATURED WORK";
    if (modalDesc) modalDesc.textContent = link.dataset.projectDesc || "";
    if (modalChallenge) modalChallenge.textContent = link.dataset.projectChallenge || "";
    if (modalSolution) modalSolution.textContent = link.dataset.projectSolution || "";
    if (modalMetrics) modalMetrics.textContent = link.dataset.projectMetrics || "";
    if (modalLiveBtn && link.dataset.projectUrl) {
      modalLiveBtn.setAttribute("href", link.dataset.projectUrl);
    }

    projectModal.classList.add("open");
    projectModal.setAttribute("aria-hidden", "false");
  });
});

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeProjectModal);
}

if (projectModal) {
  projectModal.addEventListener("click", (event) => {
    if (event.target === projectModal) {
      closeProjectModal();
    }
  });
}

if (modalInquireBtn) {
  modalInquireBtn.addEventListener("click", closeProjectModal);
}

/* =========================================================
   FAQ ACCORDION
========================================================= */
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");
  if (!button) return;

  button.addEventListener("click", () => {
    const isCurrentlyActive = item.classList.contains("active");

    faqItems.forEach((otherItem) => {
      otherItem.classList.remove("active");
      const otherBtn = otherItem.querySelector(".faq-question");
      if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
    });

    if (!isCurrentlyActive) {
      item.classList.add("active");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

/* =========================================================
   ACTIVE NAVIGATION LINK ON SCROLL
========================================================= */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));
        const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  },
  { rootMargin: "-35% 0px -55% 0px" }
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

/* =========================================================
   CONNECTED AGENCY EMAIL FORM (founder@novaflowdigital.co)
========================================================= */
const contactForm = document.getElementById("contactForm");
const sendWhatsappBtn = document.getElementById("sendWhatsappBtn");
const submitEmailBtn = document.getElementById("submitEmailBtn");
const emailReceiptBox = document.getElementById("emailReceiptBox");
const receiptRefId = document.getElementById("receiptRefId");
const receiptClientName = document.getElementById("receiptClientName");
const receiptGmailLink = document.getElementById("receiptGmailLink");
const receiptMailtoLink = document.getElementById("receiptMailtoLink");
const receiptWhatsappLink = document.getElementById("receiptWhatsappLink");
const resetFormBtn = document.getElementById("resetFormBtn");

function getFormValues() {
  const name = (document.getElementById("name")?.value || "").trim();
  const email = (document.getElementById("email")?.value || "").trim();
  const phone = (document.getElementById("phone")?.value || "").trim();
  const service = document.getElementById("service")?.value || "Web Design + Development";
  const message = (document.getElementById("message")?.value || "").trim();
  return { name, email, phone, service, message };
}

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { name, email, phone, service, message } = getFormValues();

    if (!name || name.length < 2) {
      showToast("Please enter your full name.");
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast("Please enter a valid email address.");
      return;
    }
    if (!message || message.length < 15) {
      showToast("Please share a few details about your project (at least 15 characters).");
      return;
    }

    if (submitEmailBtn) {
      submitEmailBtn.disabled = true;
      submitEmailBtn.innerHTML = `Sending to ${AGENCY_EMAIL}... <span>→</span>`;
    }

    let generatedRef = `NF-2026-${Math.floor(100 + Math.random() * 900)}`;

    // 1. Send to our backend API (/api/inquiries)
    try {
      const apiRes = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          service,
          message,
          recipientEmail: AGENCY_EMAIL
        })
      });
      if (apiRes.ok) {
        const data = await apiRes.json();
        if (data?.inquiry?.id) {
          generatedRef = data.inquiry.id;
        }
      }
    } catch {
      // Continues to FormSubmit & direct dispatch fallback
    }

    // 2. Trigger FormSubmit AJAX in background for static Vercel hosting compatibility
    fetch(`https://formsubmit.co/ajax/${AGENCY_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        _subject: `[${generatedRef}] New Project Inquiry — ${service} (${name})`,
        name,
        email,
        phone: phone || "Not provided",
        service,
        message
      })
    }).catch(() => {});

    const subject = `[${generatedRef}] New Project Inquiry — ${service} (${name})`;
    const body =
`Hello NovaFlow Digital,

Reference ID: ${generatedRef}
Name: ${name}
Email: ${email}
Phone/WhatsApp: ${phone || "Not provided"}
Service Required: ${service}

Project Brief:
${message}

Thank you.`;

    const whatsappText =
`Hi NovaFlow Digital!

*New Project Inquiry (${generatedRef})*
• *Name:* ${name}
• *Email:* ${email}
• *Phone:* ${phone || "Not provided"}
• *Service:* ${service}

*Project Details:*
${message}`;

    if (receiptRefId) receiptRefId.textContent = generatedRef;
    if (receiptClientName) receiptClientName.textContent = name;
    if (receiptGmailLink) {
      receiptGmailLink.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(AGENCY_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    if (receiptMailtoLink) {
      receiptMailtoLink.href = `mailto:${AGENCY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    if (receiptWhatsappLink) {
      receiptWhatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;
    }

    contactForm.style.display = "none";
    if (emailReceiptBox) {
      emailReceiptBox.classList.add("active");
    }

    if (submitEmailBtn) {
      submitEmailBtn.disabled = false;
      submitEmailBtn.innerHTML = `Send via Email <span>→</span>`;
    }

    showToast(`Project brief routed to ${AGENCY_EMAIL}!`);
  });
}

if (resetFormBtn && contactForm && emailReceiptBox) {
  resetFormBtn.addEventListener("click", () => {
    contactForm.reset();
    emailReceiptBox.classList.remove("active");
    contactForm.style.display = "block";
  });
}

if (sendWhatsappBtn) {
  sendWhatsappBtn.addEventListener("click", () => {
    const { name, email, phone, service, message } = getFormValues();

    if (!name || !message) {
      showToast("Please enter your name and a short project message first.");
      return;
    }

    const whatsappText =
`Hi NovaFlow Digital! 👋

*New Project Inquiry*
• *Name:* ${name}
• *Email:* ${email || "Not provided"}
• *Phone:* ${phone || "Not provided"}
• *Service:* ${service}

*Project Details:*
${message}`;

    showToast("Opening WhatsApp with your project brief...");
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}

/* =========================================================
   CURRENT YEAR & ESC KEY HANDLER
========================================================= */
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileMenu();
    closeProjectModal();
  }
});
