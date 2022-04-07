function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputRef = document.querySelector("input");
const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");
createBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  inputRef.value = "";
  boxesRef.textContent = "";
}
function createBoxes(amount, boxes) {
  amount = inputRef.value;
  boxes = [];
  for (let i = 30; i < 30 + amount * 10; i += 10) {
    let box = document.createElement("div");
    box.style.width = `${i}px`;
    box.style.height = `${i}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  return boxesRef.append(...boxes);
}
