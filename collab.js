function validateForm() {
  const password = document.getElementById("password").value;
  const terms = document.getElementById("terms").checked;

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return false;
  }

  if (!terms) {
    alert("Please accept the terms and conditions.");
    return false;
  }

  alert("Registration successful! Thank you.");
  return true;
}