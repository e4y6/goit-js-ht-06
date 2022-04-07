const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", onInput);
function onInput(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("all fields should be completed");
  } else {
    console.log(email.value, password.value);
    e.target.reset();
  }
}
