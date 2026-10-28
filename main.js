// Mobile menu toggle
const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
}

// Services page: category filter chips
document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    const cat = chip.dataset.filter;
    document.querySelectorAll(".service-card").forEach((card) => {
      card.style.display = cat === "all" || card.dataset.cat === cat ? "" : "none";
    });
  });
});

// Quote page: pre-select the service passed from a "Request a Quote" button (?service=...)
const serviceSelect = document.getElementById("service");
if (serviceSelect) {
  const service = new URLSearchParams(location.search).get("service");
  if (service) serviceSelect.value = service;
}

// Quote page: show selected file names in the upload box
const fileInput = document.getElementById("files");
if (fileInput) {
  fileInput.addEventListener("change", () => {
    const names = [...fileInput.files].map((f) => f.name).join(", ");
    document.getElementById("file-list").textContent = names || "PNG, JPG, PDF, AI, or SVG — up to 25MB";
  });
}

// Quote page: placeholder submit (no backend yet)
const form = document.getElementById("quote-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.style.display = "none";
    document.querySelector(".form-success").style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
