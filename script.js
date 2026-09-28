/* Contact configuration: country code + area code + number, digits only. */
const WHATSAPP_NUMBER = "5545998169954";
const DEFAULT_MESSAGE =
  "Olá, Felipe! Vim pelo seu site e gostaria de saber mais sobre o acompanhamento esportivo.";

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.documentElement.classList.add("js");
document.querySelector("#year").textContent = String(new Date().getFullYear());
document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = buildWhatsAppUrl(DEFAULT_MESSAGE);
});

/* Mobile disclosure navigation. Desktop and no-JS navigation stay available. */
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#menu-principal");
const mobileQuery = window.matchMedia("(max-width: 700px)");
menuToggle.hidden = false;

function closeMenu(returnFocus = false) {
  navigation.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  if (returnFocus) menuToggle.focus();
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  navigation.classList.toggle("is-open", !isOpen);
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuToggle.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu(true);
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});

mobileQuery.addEventListener("change", () => {
  const focusWasInMenu = navigation.contains(document.activeElement);
  closeMenu(mobileQuery.matches && focusWasInMenu);
});

/* Service and attendance CTAs preselect the relevant field. */
document.querySelectorAll("[data-service], [data-format]").forEach((link) => {
  link.addEventListener("click", () => {
    if (link.dataset.service)
      document.querySelector("#service").value = link.dataset.service;
    if (link.dataset.format)
      document.querySelector("#format").value = link.dataset.format;
  });
});

/* Native details/summary supplies accessible mouse, touch and keyboard FAQ behavior. */
const form = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const status = document.querySelector("#form-status");
const fallback = document.querySelector("#whatsapp-fallback");

nameInput.addEventListener("input", () => nameInput.setCustomValidity(""));

form.addEventListener("input", () => {
  status.textContent = "";
  fallback.hidden = true;
  fallback.removeAttribute("href");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  nameInput.setCustomValidity(
    nameInput.value.trim().length < 2
      ? "Informe seu nome com pelo menos 2 caracteres."
      : "",
  );
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const goal = String(data.get("objetivo") || "").trim();
  const message = [
    `Olá, Felipe! Meu nome é ${String(data.get("nome")).trim()}.`,
    "Vim pelo seu site e gostaria de saber mais sobre seu acompanhamento.",
    "",
    `Interesse: ${data.get("modalidade")}`,
    `Formato: ${data.get("formato")}`,
    ...(goal ? [`Meu objetivo: ${goal}`] : []),
  ].join("\n");
  const url = buildWhatsAppUrl(message);
  fallback.href = url;
  fallback.hidden = false;
  status.textContent =
    "Mensagem preparada! Revise e envie no WhatsApp. Se a nova aba não abrir, use o link abaixo.";
  window.open(url, "_blank", "noopener,noreferrer");
});
