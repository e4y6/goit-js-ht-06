const ListRef = document.querySelector("#categories");
const headingsRef = document.querySelectorAll("h2");
const secondaryListRef = document.querySelectorAll("#categories ul");

const countCategories = () =>
  console.log(`Number of categories: ${ListRef.children.length}`);
function getMessagess() {
  for (let i = 0; i < headingsRef.length; i += 1) {
    console.log(" ");
    console.log(`Category: ${headingsRef[i].textContent}`);
    console.log(`Elements: ${secondaryListRef[i].children.length}`);
  }
}
countCategories();
getMessagess();
