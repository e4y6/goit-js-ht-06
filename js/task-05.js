const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");
const onInputing = (value) =>
  nameInputRef.value === ""
    ? (nameOutputRef.textContent = "Anonymous")
    : (nameOutputRef.textContent = nameInputRef.value);
nameInputRef.addEventListener("input", onInputing);
