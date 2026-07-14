import { API } from "./api.js";

// ===================== REGISTER =====================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const user = {

            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            role: "client"

        };

        const result = await API.register(user);

        if (result.success) {

            alert("Registration Successful");

            localStorage.setItem("token", result.token);

            window.location.href = "login.html";

        } else {

            alert(result.message);

        }

    });

}


// ===================== LOGIN =====================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const user = {

            email: document.getElementById("email").value,
            password: document.getElementById("password").value

        };

        const result = await API.login(user);

        if (result.success) {

            localStorage.setItem("token", result.token);

            alert("Login Successful");

            window.location.href = "index.html";

        } else {

            alert(result.message);

        }

    });

}