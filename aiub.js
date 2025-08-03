document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop default submission

    const name = document.getElementById("fname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const amount = document.getElementById("damount").value.trim();
    const termsChecked = document.getElementById("cbox").checked;

    // Check if any field is empty
    if (!name || !email || !phone || !password || !amount) {
      alert("All fields must be filled.");
      return;
    }

    // Name must be at least 3 characters
    if (name.length < 3) {
      alert("Name must be at least 3 characters long.");
      return;
    }

    // Phone must be exactly 11 digits
    const phonePattern = /^\d{11}$/;
    if (!phonePattern.test(phone)) {
      alert("Phone number must be exactly 11 digits.");
      return;
    }

    // Password must have uppercase, lowercase, and digit
    const upper = /[A-Z]/;
    const lower = /[a-z]/;
    const digit = /\d/;
    if (!upper.test(password) || !lower.test(password) || !digit.test(password)) {
      alert("Password must contain at least one uppercase letter, one lowercase letter, and one digit.");
      return;
    }

    // Terms & conditions must be accepted
    if (!termsChecked) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    // All validations passed
    alert("Donation submitted successfully!");
    form.reset();
  });
});
