const decrementButtonRef = document.querySelector(
  "button[data-action = 'decrement']"
);
const incrementButtonRef = document.querySelector(
  "button[data-action = 'increment']"
);
const valueRef = document.querySelector("#value");

decrementButtonRef.addEventListener("click", onCounterClick);
incrementButtonRef.addEventListener("click", onCounterClick);
valueRef.addEventListener("input", onInputValue);

let counterValue = 0;
function onCounterClick(e) {
  e.target === decrementButtonRef ? (counterValue -= 1) : (counterValue += 1);
  valueRef.textContent = counterValue;
}
function onInputValue() {
  valueRef.textContent = valueRef.value;
}
