const passRangeNumber = document.getElementById("passRangeNumber");
const passRange = document.getElementById("passRange");
const form = document.getElementById("form");
const displayPassword = document.getElementById("display");
passRange.addEventListener("input", charAmount);
passRangeNumber.addEventListener("input", charAmount);

function charAmount(e) {
  const value = e.target.value;
  passRange.value = value;
  passRangeNumber.value = value;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const length = passRange.value;
  displayPassword.innerText = randomPassword(length);
});

const btnCopy = document.getElementById("btnCopy");
btnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(displayPassword.innerText);
  alert("Password copied to clipboard");
});

function randomPassword(length) {
  const charset = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let password = "";
  const array = new Uint32Array(length);

  window.crypto.getRandomValues(array);
  for (let i = 0; i < length; i++) {
    password += charset[array[i] % charset.length];
  }

  return password;
}
