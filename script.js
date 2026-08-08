const wrapper = document.querySelector(".wrapper");
const overlay = document.querySelector("#overlay");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnlogin-popup");
const iconClose = document.querySelector(".icon-close");
const menuToggle = document.querySelector("#menuToggle");
const navigation = document.querySelector("#navigation");
const primaryAction = document.querySelector(".primary-action");
const forms = document.querySelectorAll("form");
const passwordToggles = document.querySelectorAll(".password-toggle");

function openPopup(showRegister = false) {
  wrapper.classList.add("active-popup");
  overlay.classList.add("show");
  wrapper.classList.toggle("active", showRegister);
}

function closePopup() {
  wrapper.classList.remove("active-popup", "active");
  overlay.classList.remove("show");
}

function closeMenu() {
  navigation.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

registerLink.addEventListener("click", (event) => {
  event.preventDefault();
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", (event) => {
  event.preventDefault();
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  closeMenu();
  openPopup(false);
});

primaryAction.addEventListener("click", () => openPopup(false));
iconClose.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".navigation a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

passwordToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const input = toggle.parentElement.querySelector("input");
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    toggle.innerHTML = isHidden
      ? '<ion-icon name="eye-off-outline"></ion-icon>'
      : '<ion-icon name="eye-outline"></ion-icon>';
    toggle.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
  });
});

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = form.querySelector(".form-message");
    message.textContent = form.closest(".register")
      ? "Account preview created successfully."
      : "Login preview successful.";
    setTimeout(() => {
      message.textContent = "";
    }, 2600);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePopup();
    closeMenu();
  }
});
