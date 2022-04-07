function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
document.querySelector("button").addEventListener("click", onButtonClick);
function onButtonClick() {
  document.body.style.backgroundColor = getRandomColor();
  document.querySelector(".color").textContent =
    document.body.style.backgroundColor;
}
