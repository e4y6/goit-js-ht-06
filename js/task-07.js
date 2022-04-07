const inputRef = document.querySelector("input#font-size-control");
const spanRef = document.querySelector("span#text");
// const onInputting = (e) => {
//   spanRef.style.fontSize = `${e.target.value}px`;
// };
// addEventListener("input", onInputting);

addEventListener(
  "input",
  () => (spanRef.style.fontSize = `${inputRef.value}px`)
);
