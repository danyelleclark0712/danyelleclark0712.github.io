function validateEmail() {
  const email = document.getElementById("email").value;
  const confirmEmail = document.getElementById("confirmEmail").value;

  if (email !== confirmEmail) {
    alert("Email addresses do not match.");
    return false;
  }

  // Additional validation logic here (e.g., check for valid email format)
  return true;
}
