const inputRef = document.querySelector("input[data-length='6']");
inputRef.addEventListener("blur", onBlur);

function onBlur(e) {
  e.target.value.length == inputRef.dataset.length
    ? (inputRef.className = "valid")
    : (inputRef.className = "invalid");
}
// function onBlur(e) {
//   e.target.value.length === parseFloat(inputRef.dataset.length)
//     ? (inputRef.className = "valid")
//     : (inputRef.className = "invalid");
// }
