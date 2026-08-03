const wrapper = document.querySelector(".wrapper");
const loginBtn = document.querySelector(".btnlogin-popup");
const closeBtn = document.querySelector(".icon-close");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");
const overlay = document.querySelector(".overlay");

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

// ==========================
// Open Login Popup
// ==========================

loginBtn.addEventListener("click", () => {
    wrapper.classList.add("active-popup");
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";
});

// ==========================
// Close Popup
// ==========================

function closePopup() {
    wrapper.classList.remove("active-popup");
    wrapper.classList.remove("active");
    overlay.classList.remove("show");
    document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closePopup);

overlay.addEventListener("click", closePopup);

// Escape Key

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        closePopup();

    }

});

// ==========================
// Register/Login Switching
// ==========================

registerLink.addEventListener("click", (e) => {

    e.preventDefault();

    wrapper.classList.add("active");

});

loginLink.addEventListener("click", (e) => {

    e.preventDefault();

    wrapper.classList.remove("active");

});

// ==========================
// Mobile Navigation
// ==========================

menuToggle.addEventListener("click", () => {

    navigation.classList.toggle("open");

});

// ==========================
// Password Toggle
// ==========================

document.querySelectorAll(".password-toggle").forEach(button => {

    button.addEventListener("click", () => {

        const input = button.parentElement.querySelector("input");

        const icon = button.querySelector("ion-icon");

        if (input.type === "password") {

            input.type = "text";

            icon.setAttribute("name", "eye-off-outline");

        }

        else {

            input.type = "password";

            icon.setAttribute("name", "eye-outline");

        }

    });

});

// ==========================
// Simple Login Validation
// ==========================

const loginForm = document.querySelector(".login form");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = loginForm.querySelector("input[type=email]").value.trim();

    const password = loginForm.querySelector("input[type=password]").value.trim();

    const message = loginForm.querySelector(".form-message");

    if (!email || !password) {

        message.style.color = "#ef4444";

        message.textContent = "Please fill all fields.";

        return;

    }

    message.style.color = "#10b981";

    message.textContent = "Login Successful ✓";

});

// ==========================
// Register Validation
// ==========================

const registerForm = document.querySelector(".register form");

registerForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const username = registerForm.querySelector("input[type=text]").value.trim();

    const email = registerForm.querySelector("input[type=email]").value.trim();

    const password = registerForm.querySelector("input[type=password]").value.trim();

    const message = registerForm.querySelector(".form-message");

    if (username.length < 3) {

        message.style.color = "#ef4444";

        message.textContent = "Username too short.";

        return;

    }

    if (password.length < 6) {

        message.style.color = "#ef4444";

        message.textContent = "Password must be at least 6 characters.";

        return;

    }

    message.style.color = "#10b981";

    message.textContent = "Account Created Successfully ✓";

});

// ==========================
// Navbar Shadow on Scroll
// ==========================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".site-header");

    if (window.scrollY > 40) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

    }

    else {

        header.style.boxShadow = "none";

    }

});
