// PLAN SELECTOR
function selectPlan(planInfo) {
    const box = document.getElementById("selectedPlanBox");
    box.style.display = "block";
    box.innerHTML = "Selected Plan: " + planInfo;
}

// MOBILE NUMBER VALIDATION
document.addEventListener("DOMContentLoaded", () => {

    const mobileForm = document.getElementById("mobileForm");

    if (mobileForm) {
        mobileForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let num = document.getElementById("mobileNumber").value;

            if (num.length !== 10 || isNaN(num)) {
                alert("Enter valid 10-digit mobile number");
                return;
            }

            alert("Valid Number! Now choose your plan.");
        });
    }

    // LOGIN
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Login Successful!");
            window.location.href = "index.html";
        });
    }

    // SIGNUP
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Signup Successful!");
            window.location.href = "login.html";
        });
    }

});
