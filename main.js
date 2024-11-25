function validateEmail() {
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirmEmail").value;

    if (email !== confirmEmail) {
        alert("Email addresses do not match. Please try again.");
        return false;
    }

    return true;
}
