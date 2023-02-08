const pass = document.getElementById("password");
const passC = document.getElementById("confirm-password");
const passBorder = document.getElementById("password");
const passCBorder = document.getElementById("confirm-password");
const passCError = document.getElementById("passwordC-error")


passC.addEventListener("input", (event) => {
  if (pass.value !== passC.value) {
    passCError.textContent = "Passwords do not match"
    passBorder.style.borderColor = `red`;
    passCBorder.style.borderColor = `red`;
  }
  else {
    passCError.textContent = '';
    passBorder.style.borderColor = `green`;
    passCBorder.style.borderColor = `green`;
  }
});

