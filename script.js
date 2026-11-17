/* =========================================================
   NOVAFLOW DIGITAL — AI-FIRST LUXURY DARK PASTEL STUDIO
   Standalone Vanilla JavaScript (script.js)
   Connected Agency Email: founder@novaflowdigital.co
========================================================= */

window.__NOVAFLOW_INIT__ = true;
const AGENCY_EMAIL = "founder@novaflowdigital.co";
const WHATSAPP_NUMBER = "918849506614";

/* HEADER SCROLL STATE */
const header = document.getElementById("siteHeader");
window.addEventListener("scroll", () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 20);
});

/* MOBILE MENU */
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
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
}

/* TOAST NOTIFICATION */
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

/* PALETTE MOOD SWITCHER */
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
        : "Switched to Luxury Medium Pastel palette"
    );
  });
}

/* 3D HERO CARD TILT + STEP SWITCHER */
const heroVisualWrapper = document.getElementById("heroVisualWrapper");
const heroTiltCard = document.getElementById("heroTiltCard");

if (heroVisualWrapper && heroTiltCard) {
  heroVisualWrapper.addEventListener("mousemove", (e) => {
    const rect = heroVisualWrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ry = ((x - rect.width / 2) / (rect.width / 2)) * 5;
    const rx = -((y - rect.height / 2) / (rect.height / 2)) * 5;
    heroTiltCard.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
  });
  heroVisualWrapper.addEventListener("mouseleave", () => {
    heroTiltCard.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
}

const heroStepButtons = document.querySelectorAll("[data-hero-step]");
const heroStepDetail = document.getElementById("heroStepDetail");
const heroVisualTagline = document.getElementById("heroVisualTagline");

const heroStepsData = {
  "01": {
    tagline: "01 · AI Conversion Strategy & UX Architecture",
    detail: "Buyer journey sitemaps, interactive AI lead funnels & high-converting Figma wireframes."
  },
  "02": {
    tagline: "02 · Luxury Dark Pastel Visual Direction",
    detail: "Bespoke typography, balanced pastel color systems & unmistakable brand authority."
  },
  "03": {
    tagline: "03 · 99+ Full-Stack & AI Engineering",
    detail: "Blazing-fast HTML/CSS/JS, React & Node.js builds with direct email and WhatsApp routing."
  }
};

heroStepButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    heroStepButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const info = heroStepsData[btn.getAttribute("data-hero-step")];
    if (info && heroStepDetail && heroVisualTagline) {
      heroVisualTagline.textContent = info.tagline;
      heroStepDetail.textContent = info.detail;
    }
  });
});

/* HELPER: ATTACH SUMMARY TO CONTACT FORM */
function attachToContactBrief(serviceVal, summaryText, toastText) {
  const serviceSelect = document.getElementById("service");
  const messageBox = document.getElementById("message");
  if (serviceSelect && serviceVal) {
    serviceSelect.value = serviceVal;
  }
  if (messageBox) {
    messageBox.value = summaryText;
  }
  showToast(toastText);
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}

/* =========================================================
   ENGINE 01: LIVE AI WEBSITE BLUEPRINT GENERATOR (#ai-lab)
========================================================= */
const BLUEPRINT_DATA = {
  saas: {
    label: "AI SaaS & Tech Product",
    sprint: "Sprint: 10–14 Days · +165% Demo Lift",
    hook: "Interactive Product Sandbox & Enterprise Pipeline Engine",
    pages: [
      { title: "01. Interactive Hero + Live Sandbox", purpose: "Let buyers test your core workflow in 10 seconds", ai: "AI Prompt Simulator" },
      { title: "02. Architecture & Security Matrix", purpose: "Prove API speed and enterprise readiness", ai: "Stack Compatibility Guide" },
      { title: "03. Live Team ROI Calculator", purpose: "Justify pricing with instant financial math", ai: "Real-Time ROI Engine" },
      { title: "04. Before/After Telemetry Proof", purpose: "Eliminate skepticism with verified benchmarks", ai: "Industry Proof Filter" },
      { title: "05. Zero-Friction Demo Funnel", purpose: "Qualify leads and route straight to founder inbox", ai: "24/7 AI Lead Qualifier" }
    ],
    modules: [
      "Interactive In-Browser Product Sandbox",
      "AI B2B Lead Qualifier & Instant Email/WhatsApp Router",
      "Dynamic Team ROI & Cost-Savings Calculator",
      "99+ Lighthouse Technical SEO & Schema Graph"
    ]
  },
  ecommerce: {
    label: "Luxury D2C & E-Commerce",
    sprint: "Sprint: 10–15 Days · +140% Checkout Lift",
    hook: "Editorial Flagship Storefront & AI Guided Shopping",
    pages: [
      { title: "01. Editorial Hero & Signature Drop", purpose: "Command luxury authority in 2 seconds", ai: "Smart Collection Spotlight" },
      { title: "02. AI Product Finder & Style Quiz", purpose: "Match buyers to their exact bundle in 3 clicks", ai: "AI Concierge Quiz" },
      { title: "03. High-Velocity Product Experience", purpose: "Tactile visuals and instant bundle upsell", ai: "Dynamic Bundle Calculator" },
      { title: "04. Verified Buyer Proof Matrix", purpose: "Build high-intent trust right before checkout", ai: "Use-Case Review Filter" },
      { title: "05. Direct VIP WhatsApp & Checkout", purpose: "Capture high-ticket orders automatically", ai: "WhatsApp Order Concierge" }
    ],
    modules: [
      "AI Product Quiz & Bundle Recommender",
      "Instant WhatsApp VIP Shopping Concierge",
      "Sub-Second Image Optimization & 99+ Mobile Speed",
      "Dynamic AOV Upsell & Shipping Estimator"
    ]
  },
  healthcare: {
    label: "Healthcare & Clinic Portal",
    sprint: "Sprint: 7–12 Days · +190% Patient Bookings",
    hook: "High-Trust Patient Portal & AI Specialist Triage",
    pages: [
      { title: "01. Calm Clinical Hero & Instant Booking", purpose: "Reassure patients with zero-wait scheduling", ai: "AI Specialist Matcher" },
      { title: "02. Interactive Doctor Directory", purpose: "Filter specialists by department and availability", ai: "Symptom-to-Doctor Guide" },
      { title: "03. Treatment & Package Transparency", purpose: "Answer patient FAQs before they call", ai: "Interactive Care Timeline" },
      { title: "04. Verified Patient Outcomes", purpose: "Establish clinical trust and accreditation proof", ai: "Outcome Proof Strip" },
      { title: "05. 30-Second Mobile Appointment Flow", purpose: "Confirm bookings via Email & WhatsApp", ai: "Automated Booking Receipt" }
    ],
    modules: [
      "AI Patient Triage & Department Recommender",
      "1-Click WhatsApp & Email Appointment Dispatcher",
      "100% Mobile-First Accessibility",
      "Local Medical SEO & Google Maps Schema"
    ]
  },
  realestate: {
    label: "Real Estate & Architecture",
    sprint: "Sprint: 10–14 Days · +155% Site Visits",
    hook: "Spatial Property Showcase & AI Investment Yield Engine",
    pages: [
      { title: "01. Architectural Cinema Hero", purpose: "Present flagship developments with quiet luxury", ai: "Smart Budget Filter" },
      { title: "02. Interactive Floorplan Explorer", purpose: "Inspect unit layouts and specifications live", ai: "Unit Sq.Ft. Comparator" },
      { title: "03. Live ROI, Rental Yield & EMI Engine", purpose: "Calculate appreciation and monthly cashflow", ai: "Property ROI Calculator" },
      { title: "04. Location & Connectivity Intelligence", purpose: "Highlight transit and business proximity", ai: "Commute Breakdown" },
      { title: "05. VIP Brochure & Private Viewing Funnel", purpose: "Route verified investors to sales desk", ai: "WhatsApp Brochure Concierge" }
    ],
    modules: [
      "Interactive Property Yield & EMI Calculator",
      "Dynamic Floorplan & Unit Filter",
      "Automated WhatsApp Brochure Sender",
      "99+ Mobile Speed for High-Res Visuals"
    ]
  },
  hospitality: {
    label: "Hospitality & Fine Dining",
    sprint: "Sprint: 7–10 Days · 0% Commission Bookings",
    hook: "Atmospheric Flagship & Direct Table/Stay Reservation Engine",
    pages: [
      { title: "01. Sensory Editorial Hero", purpose: "Transport guests into your space immediately", ai: "Occasion Recommender" },
      { title: "02. Interactive Tasting Menu / Suites", purpose: "Filter by mood, season, or dietary preference", ai: "AI Pairing Concierge" },
      { title: "03. Private Events Configurator", purpose: "Convert high-margin corporate & group bookings", ai: "Event Package Estimator" },
      { title: "04. Guest Acclaim & Press Showcase", purpose: "Reinforce prestige with curated reviews", ai: "Guest Sentiment Strip" },
      { title: "05. Direct Zero-Commission Booking", purpose: "Confirm reservations directly on WhatsApp/Email", ai: "Instant Booking Receipt" }
    ],
    modules: [
      "AI Menu / Suite Concierge",
      "Direct Zero-Commission Reservation Flow",
      "Private Event Package Calculator",
      "Instant Mobile Load on 4G/5G Networks"
    ]
  },
  b2b: {
    label: "B2B Enterprise & Agency",
    sprint: "Sprint: 10–14 Days · +180% Inbound Proposals",
    hook: "Authority-First B2B Lead Engine & Scope Configurator",
    pages: [
      { title: "01. Category-Authority Hero", purpose: "Clarify who you help and measurable ROI", ai: "Client Outcome Selector" },
      { title: "02. Interactive Scope & Cost Estimator", purpose: "Pre-qualify serious B2B buyers automatically", ai: "Live Tier Configurator" },
      { title: "03. Before/After Benchmark Proof", purpose: "Prove superiority with hard performance numbers", ai: "Comparison Matrix" },
      { title: "04. Executive Process & Leadership", purpose: "Show transparent milestones and accountability", ai: "Deliverable Breakdown" },
      { title: "05. Automated Proposal Dispatch", purpose: "Send structured briefs straight to founder inbox", ai: "Smart Brief Router" }
    ],
    modules: [
      "Interactive B2B Scope & Proposal Generator",
      "Live ROI & Efficiency Calculator",
      "Direct Executive Email + WhatsApp Routing",
      "99+ Technical SEO Architecture"
    ]
  }
};

let currentAiIndustry = "saas";
let latestBlueprintBrief = "";

function renderAiBlueprint() {
  const brandInput = document.getElementById("aiBrandNameInput");
  const goalSelect = document.getElementById("aiGoalSelect");
  const brand = (brandInput?.value || "Your Brand").trim() || "Your Brand";
  const goal = goalSelect?.value || "Generate Qualified High-Ticket Leads";
  const data = BLUEPRINT_DATA[currentAiIndustry] || BLUEPRINT_DATA.saas;

  const bpIndustryBadge = document.getElementById("bpIndustryBadge");
  const bpSprintBadge = document.getElementById("bpSprintBadge");
  const bpHeadline = document.getElementById("bpHeadline");
  const bpGoalSub = document.getElementById("bpGoalSub");
  const bpSitemapList = document.getElementById("bpSitemapList");
  const bpAiModulesList = document.getElementById("bpAiModulesList");
  const whatsappBlueprintBtn = document.getElementById("whatsappBlueprintBtn");

  if (bpIndustryBadge) bpIndustryBadge.textContent = `LIVE BLUEPRINT · ${data.label.toUpperCase()}`;
  if (bpSprintBadge) bpSprintBadge.textContent = data.sprint;
  if (bpHeadline) bpHeadline.textContent = `${brand} — ${data.hook}`;
  if (bpGoalSub) bpGoalSub.textContent = `Objective: ${goal} · Engineered by Yash Trivedi`;

  if (bpSitemapList) {
    bpSitemapList.innerHTML = data.pages
      .map(
        (p) => `
      <div class="bp-sitemap-item">
        <div>
          <strong>${p.title}</strong>
          <small>${p.purpose}</small>
        </div>
        <span class="bp-ai-badge">AI: ${p.ai}</span>
      </div>`
      )
      .join("");
  }

  if (bpAiModulesList) {
    bpAiModulesList.innerHTML = data.modules.map((m) => `<li>${m}</li>`).join("");
  }

  latestBlueprintBrief = `[AI Blueprint Generated for ${brand}]\n• Industry: ${data.label}\n• Goal: ${goal}\n• Architecture: ${data.hook}\n• ${data.sprint}\n• AI Modules: ${data.modules.join(", ")}`;

  if (whatsappBlueprintBtn) {
    whatsappBlueprintBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `Hi Yash (NovaFlow Digital)! Here is the AI Website Blueprint I generated:\n\n${latestBlueprintBrief}`
    )}`;
  }
}

document.querySelectorAll("#aiIndustryOptions .est-option-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#aiIndustryOptions .est-option-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentAiIndustry = btn.getAttribute("data-industry") || "saas";
    renderAiBlueprint();
  });
});

document.getElementById("generateBlueprintBtn")?.addEventListener("click", () => {
  renderAiBlueprint();
  showToast("Generated custom AI website blueprint!");
});

document.getElementById("aiGoalSelect")?.addEventListener("change", renderAiBlueprint);
document.getElementById("attachBlueprintBtn")?.addEventListener("click", () => {
  renderAiBlueprint();
  attachToContactBrief("Web Design + Development", latestBlueprintBrief, "Attached AI Blueprint to your project brief!");
});

renderAiBlueprint();

/* =========================================================
   ENGINE 02: BEFORE vs. AFTER TRANSFORMATION SLIDER (#transform)
========================================================= */
const TRANSFORM_DATA = {
  saas: {
    label: "AI SaaS & B2B Platform",
    beforeSpeed: "58 PageSpeed · 4.4s Load",
    beforeUrl: "http://legacy-saas-template.com",
    beforeTitle: "Welcome to Our Cloud Software Solutions Company",
    beforeSub: "We provide various digital services and enterprise solutions for businesses looking to grow.",
    beforePoints: [
      "✕ Vague buzzword headline with zero interactive product proof",
      "✕ Heavy unoptimized scripts causing 4.4s mobile load delay",
      "✕ Static Contact Us form with 78% visitor drop-off"
    ],
    beforeConv: "Visitor Conversion: 1.1%",
    afterSpeed: "99 PageSpeed · 0.4s Instant",
    afterUrl: "https://novaflow-engineered-saas.co",
    afterTitle: "Automate Enterprise Workflows 4.2x Faster with Live AI Agents",
    afterSub: "Test our live API sandbox below, calculate your team’s annual engineering savings, and deploy in 14 days.",
    afterUpgrades: [
      "✓ Interactive AI Prompt & Workflow Sandbox right inside the Hero",
      "✓ 99/100 Lighthouse Performance with 0.4s instant paint",
      "✓ Live Team ROI Calculator + Direct Founder WhatsApp/Email routing"
    ],
    afterConv: "Verified Outcome: 4.8% Conversion · 99+ Speed"
  },
  healthcare: {
    label: "Healthcare & Specialist Clinic",
    beforeSpeed: "61 PageSpeed · 3.9s Load",
    beforeUrl: "http://old-city-clinic.org",
    beforeTitle: "City Medical Center — General & Specialist Doctors",
    beforeSub: "Call our reception desk between 9 AM and 5 PM to ask about doctor availability.",
    beforePoints: [
      "✕ Patients forced to call during office hours and wait on hold",
      "✕ Cluttered desktop layout that overflows on mobile phones",
      "✕ No specialist filtering or transparent consultation guidance"
    ],
    beforeConv: "Visitor Conversion: 1.4%",
    afterSpeed: "99 PageSpeed · 0.5s Instant",
    afterUrl: "https://carewell-novaflow.co",
    afterTitle: "Book Verified Specialists in 30 Seconds—Zero Waiting Room Friction",
    afterSub: "Select your symptom or department below for instant specialist matching and confirmed mobile scheduling.",
    afterUpgrades: [
      "✓ AI Specialist Matcher guides patients to the right doctor in 2 clicks",
      "✓ 100% mobile-first calming pastel interface with zero overflow",
      "✓ Instant appointment confirmation routed to Email & WhatsApp"
    ],
    afterConv: "Verified Outcome: 5.4% Conversion · +190% Bookings"
  },
  ecommerce: {
    label: "Luxury D2C & Brand Flagship",
    beforeSpeed: "54 PageSpeed · 4.8s Load",
    beforeUrl: "http://basic-theme-shop.store",
    beforeTitle: "Shop Our New Arrivals & Seasonal Catalog Online",
    beforeSub: "Browse our standard catalog pages and use third-party portals.",
    beforePoints: [
      "✕ Bloated third-party plugins slowing mobile pages to 4.8s",
      "✕ Generic grid layout that cheapens premium brand positioning",
      "✕ High cart abandonment with zero guided AI recommendation"
    ],
    beforeConv: "Visitor Conversion: 1.3%",
    afterSpeed: "99 PageSpeed · 0.4s Instant",
    afterUrl: "https://elan-novaflow.co",
    afterTitle: "Editorial Luxury Meets Sub-Second AI Personalization",
    afterSub: "Experience curated seasonal selections, interactive AI pairing recommendations, and direct VIP reservations.",
    afterUpgrades: [
      "✓ Bespoke DM Serif Display + Luxury Pastel art direction",
      "✓ Interactive AI Concierge matches buyers to curated packages",
      "✓ Direct zero-commission reservation & WhatsApp VIP checkout"
    ],
    afterConv: "Verified Outcome: 4.9% Conversion · 0% Platform Fees"
  }
};

let currentTransformScenario = "saas";

function renderTransformScenario() {
  const d = TRANSFORM_DATA[currentTransformScenario] || TRANSFORM_DATA.saas;
  document.getElementById("beforeSpeedBadge").textContent = d.beforeSpeed;
  document.getElementById("beforeUrl").textContent = d.beforeUrl;
  document.getElementById("beforeHeroTitle").textContent = d.beforeTitle;
  document.getElementById("beforeSubcopy").textContent = d.beforeSub;
  document.getElementById("beforePainPoints").innerHTML = d.beforePoints.map((p) => `<li>${p}</li>`).join("");
  document.getElementById("beforeConvLabel").textContent = d.beforeConv;

  document.getElementById("afterSpeedBadge").textContent = d.afterSpeed;
  document.getElementById("afterUrl").textContent = d.afterUrl;
  document.getElementById("afterHeroTitle").textContent = d.afterTitle;
  document.getElementById("afterSubcopy").textContent = d.afterSub;
  document.getElementById("afterUpgrades").innerHTML = d.afterUpgrades.map((p) => `<li>${p}</li>`).join("");
  document.getElementById("afterConvLabel").textContent = d.afterConv;
}

document.querySelectorAll("#transformTabs .filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#transformTabs .filter").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentTransformScenario = btn.getAttribute("data-scenario") || "saas";
    renderTransformScenario();
  });
});

const transformRangeInput = document.getElementById("transformRangeInput");
if (transformRangeInput) {
  transformRangeInput.addEventListener("input", (e) => {
    const val = Number(e.target.value);
    document.getElementById("beforePercentLabel").textContent = `LEGACY SITE (${100 - val}% VIEW)`;
    document.getElementById("sliderCenterLabel").textContent = `NovaFlow Transformation Reveal: ${val}%`;
    document.getElementById("afterPercentLabel").textContent = `NOVAFLOW AI BUILD (${val}% VIEW)`;
    const beforeCard = document.getElementById("transformBeforeCard");
    if (beforeCard) {
      beforeCard.style.opacity = val > 80 ? "0.62" : "1";
    }
  });
}

document.getElementById("requestTransformUpgradeBtn")?.addEventListener("click", () => {
  const d = TRANSFORM_DATA[currentTransformScenario];
  const summary = `[Before → After Upgrade Request: ${d.label}]\n• Benchmark Goal: ${d.afterSpeed} (${d.afterConv})\n• Upgrades: ${d.afterUpgrades.join(" | ")}`;
  attachToContactBrief("Website Redesign", summary, `Attached ${d.label} Upgrade benchmark to your brief!`);
});

renderTransformScenario();

/* =========================================================
   ENGINE 03: LIVE AI WEBSITE AUDIT & SCORER (#audit)
========================================================= */
let currentBottleneck = "low_leads";
let latestAuditBrief = "";

function runAuditEngine() {
  const raw = document.getElementById("auditDomainInput")?.value || "yourcompany.com";
  const domain = raw.trim().replace(/^https?:\/\//i, "").replace(/\/.*$/, "").toLowerCase() || "yourcompany.com";

  let hash = 0;
  for (let i = 0; i < domain.length; i++) {
    hash = (hash * 31 + domain.charCodeAt(i)) % 100;
  }

  const ux = currentBottleneck === "outdated_ui" ? 48 : 54 + (hash % 12);
  const speed = currentBottleneck === "slow_speed" ? 46 : 51 + ((hash * 3) % 14);
  const ai = currentBottleneck === "no_ai" ? 22 : 28 + ((hash * 7) % 15);
  const funnel = currentBottleneck === "low_leads" ? 44 : 49 + ((hash * 5) % 14);
  const overall = Math.round((ux + speed + ai + funnel) / 4);

  document.getElementById("auditDomainBadge").textContent = `DIAGNOSTIC REPORT · ${domain.toUpperCase()}`;
  document.getElementById("auditOverallScoreBadge").textContent = `Current: ${overall}/100 → Target: 99/100`;
  document.getElementById("auditScoreUx").textContent = `${ux}/100`;
  document.getElementById("auditScoreSpeed").textContent = `${speed}/100`;
  document.getElementById("auditScoreAi").textContent = `${ai}/100`;
  document.getElementById("auditScoreFunnel").textContent = `${funnel}/100`;

  const gaps = [
    `Static layout on ${domain} lacks an interactive AI scope or ROI calculator`,
    "Above-the-fold CTA does not pre-qualify buyer intent or route straight to WhatsApp/Email",
    "Unoptimized scripts and missing interactive proof reducing visitor conversion"
  ];
  document.getElementById("auditGapsList").innerHTML = gaps.map((g) => `<li>${g}</li>`).join("");

  const fixes = [
    { phase: "Days 1–4", title: "Luxury Pastel UI & Hero Value Restructure", sub: "Commands immediate category authority" },
    { phase: "Days 5–9", title: "Interactive AI Calculator / Scope Module", sub: "Multiplies visitor-to-lead inquiries by 2.8x" },
    { phase: "Days 10–14", title: "99+ PageSpeed & Direct Inbox Pipeline", sub: "Sub-second mobile load + instant WhatsApp routing" }
  ];
  document.getElementById("auditFixesList").innerHTML = fixes
    .map(
      (f) => `
    <div class="bp-sitemap-item">
      <div>
        <strong>${f.title}</strong>
        <small>${f.sub}</small>
      </div>
      <span class="bp-ai-badge">${f.phase}</span>
    </div>`
    )
    .join("");

  latestAuditBrief = `[Website Audit Report for ${domain}]\n• Current Score: ${overall}/100 → Target: 99/100\n• Scores: UX ${ux}/100 | Speed ${speed}/100 | AI Readiness ${ai}/100 | Funnel ${funnel}/100\n• Requested 2-Week NovaFlow Upgrade Plan`;
}

document.querySelectorAll("#auditBottleneckOptions .est-option-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#auditBottleneckOptions .est-option-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentBottleneck = btn.getAttribute("data-bottleneck") || "low_leads";
    runAuditEngine();
  });
});

document.getElementById("runAuditBtn")?.addEventListener("click", () => {
  runAuditEngine();
  showToast("Completed instant AI website audit!");
});

document.getElementById("claimAuditBtn")?.addEventListener("click", () => {
  runAuditEngine();
  attachToContactBrief("Website Redesign", latestAuditBrief, "Attached Website Audit Report to your project brief!");
});

runAuditEngine();

/* =========================================================
   ENGINE 04: PROJECT SCOPE, COST & TIMELINE CALCULATOR (#calculator)
========================================================= */
const CALC_TYPES = {
  ai_brand_site: { label: "AI-Enhanced Brand Website", minD: 7, maxD: 10, inrMin: 25000, inrMax: 45000, usdMin: 650, usdMax: 1200 },
  fullstack_webapp: { label: "Custom Full-Stack + AI Web App", minD: 12, maxD: 18, inrMin: 45000, inrMax: 85000, usdMin: 1200, usdMax: 2400 },
  redesign_speed: { label: "Website Redesign & Speed Upgrade", minD: 6, maxD: 9, inrMin: 20000, inrMax: 38000, usdMin: 500, usdMax: 950 },
  landing_funnel: { label: "High-Velocity Landing Page Funnel", minD: 4, maxD: 7, inrMin: 15000, inrMax: 28000, usdMin: 400, usdMax: 750 }
};

const CALC_SCALES = {
  compact: { label: "Focused (1–4 Core Pages)", addD: 0, mult: 1 },
  growth: { label: "Growth Flagship (5–8 Pages + AI Tools)", addD: 4, mult: 1.35 },
  enterprise: { label: "Category Leader (10+ Pages / Portal)", addD: 7, mult: 1.75 }
};

const CALC_ADDONS = {
  ai_lead_agent: { label: "Interactive AI Scope / Lead Qualifier", days: 2, inr: 8000, usd: 200 },
  seo_99_pack: { label: "99+ Technical SEO & Schema Pack", days: 1, inr: 5000, usd: 150 },
  custom_dashboard: { label: "Interactive Before/After Showcase", days: 2, inr: 7000, usd: 180 },
  roi_calculator: { label: "Custom Client ROI Calculator", days: 2, inr: 7500, usd: 190 }
};

let calcType = "ai_brand_site";
let calcScale = "growth";
let calcAddons = new Set(["ai_lead_agent", "seo_99_pack"]);
let latestCalcBrief = "";

function renderCalculator() {
  const t = CALC_TYPES[calcType] || CALC_TYPES.ai_brand_site;
  const s = CALC_SCALES[calcScale] || CALC_SCALES.growth;

  let addonDays = 0;
  let addonInr = 0;
  let addonUsd = 0;
  const deliverables = [
    "Custom Luxury Pastel / Editorial UI Design in Figma",
    "Clean Semantic HTML5, CSS3 & Vanilla JS / React Codebase",
    "100% Mobile-First Responsive Layout (390px to 1440px+)",
    "Direct Email (founder@novaflowdigital.co) & WhatsApp Lead Pipeline"
  ];

  calcAddons.forEach((key) => {
    const a = CALC_ADDONS[key];
    if (a) {
      addonDays += a.days;
      addonInr += a.inr;
      addonUsd += a.usd;
      deliverables.push(a.label);
    }
  });

  const minDays = t.minD + s.addD + addonDays;
  const maxDays = t.maxD + s.addD + addonDays;
  const inrMin = Math.round((t.inrMin * s.mult + addonInr) / 1000) * 1000;
  const inrMax = Math.round((t.inrMax * s.mult + addonInr) / 1000) * 1000;
  const usdMin = Math.round((t.usdMin * s.mult + addonUsd) / 50) * 50;
  const usdMax = Math.round((t.usdMax * s.mult + addonUsd) / 50) * 50;

  const sprintStr = `${minDays}–${maxDays} Business Days`;
  const inrStr = `₹${inrMin.toLocaleString("en-IN")} – ₹${inrMax.toLocaleString("en-IN")}`;
  const usdStr = `$${usdMin.toLocaleString("en-US")} – $${usdMax.toLocaleString("en-US")}`;

  document.getElementById("calcSelectedTitle").textContent = t.label;
  document.getElementById("calcSelectedScale").textContent = s.label;
  document.getElementById("calcTimelineVal").textContent = sprintStr;
  document.getElementById("calcInrVal").textContent = inrStr;
  document.getElementById("calcUsdVal").textContent = usdStr;
  document.getElementById("calcDeliverablesList").innerHTML = deliverables.map((d) => `<li>${d}</li>`).join("");

  latestCalcBrief = `[Configured Project Scope Estimate]\n• Project Type: ${t.label}\n• Scale: ${s.label}\n• Estimated Sprint: ${sprintStr}\n• Estimated Investment: ${inrStr} (${usdStr})\n• Deliverables: ${deliverables.join(", ")}`;
}

document.querySelectorAll("#calcTypeOptions .est-option-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#calcTypeOptions .est-option-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    calcType = btn.getAttribute("data-type") || "ai_brand_site";
    renderCalculator();
  });
});

document.querySelectorAll("#calcScaleOptions .est-option-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#calcScaleOptions .est-option-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    calcScale = btn.getAttribute("data-scale") || "growth";
    renderCalculator();
  });
});

document.querySelectorAll("#calcAddonOptions .est-option-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.getAttribute("data-addon");
    if (!key) return;
    if (calcAddons.has(key)) {
      calcAddons.delete(key);
      btn.classList.remove("active");
    } else {
      calcAddons.add(key);
      btn.classList.add("active");
    }
    renderCalculator();
  });
});

document.getElementById("lockEstimateBtn")?.addEventListener("click", () => {
  renderCalculator();
  attachToContactBrief("Web Design + Development", latestCalcBrief, "Locked in your custom estimate and attached it to your brief!");
});

renderCalculator();

/* SERVICE CARD CTA -> AUTO-SELECT SERVICE */
document.querySelectorAll(".service-cta-link").forEach((link) => {
  link.addEventListener("click", () => {
    const targetService = link.dataset.service;
    const serviceSelect = document.getElementById("service");
    if (serviceSelect && targetService) {
      serviceSelect.value = targetService;
    }
  });
});

/* FAQ ACCORDION */
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");
  if (!button) return;
  button.addEventListener("click", () => {
    const isCurrentlyActive = item.classList.contains("active");
    faqItems.forEach((other) => {
      other.classList.remove("active");
      other.querySelector(".faq-question")?.setAttribute("aria-expanded", "false");
    });
    if (!isCurrentlyActive) {
      item.classList.add("active");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

/* CONNECTED CONTACT FORM (founder@novaflowdigital.co) */
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
    if (!message || message.length < 12) {
      showToast("Please share a few details about your project.");
      return;
    }

    if (submitEmailBtn) {
      submitEmailBtn.disabled = true;
      submitEmailBtn.innerHTML = `Sending to ${AGENCY_EMAIL}... <span>→</span>`;
    }

    const generatedRef = `NF-2026-${Math.floor(100 + Math.random() * 900)}`;

    fetch(`https://formsubmit.co/ajax/${AGENCY_EMAIL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
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
    const body = `Hello Yash (NovaFlow Digital),\n\nReference ID: ${generatedRef}\nName: ${name}\nEmail: ${email}\nPhone/WhatsApp: ${phone || "Not provided"}\nService Required: ${service}\n\nProject Brief:\n${message}\n\nThank you.`;
    const whatsappText = `Hi Yash (NovaFlow Digital)!\n\n*New Project Inquiry (${generatedRef})*\n• *Name:* ${name}\n• *Email:* ${email}\n• *Phone:* ${phone || "Not provided"}\n• *Service:* ${service}\n\n*Project Details:*\n${message}`;

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
    if (emailReceiptBox) emailReceiptBox.classList.add("active");

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
    const whatsappText = `Hi Yash (NovaFlow Digital)!\n\n*New Project Inquiry*\n• *Name:* ${name}\n• *Email:* ${email || "Not provided"}\n• *Phone:* ${phone || "Not provided"}\n• *Service:* ${service}\n\n*Project Details:*\n${message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}

const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}
