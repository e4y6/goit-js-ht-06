let listItemsRef = document.querySelectorAll("#categories > .item");

function getLogs() {
  console.log(`Number of categories: ${listItemsRef.length}`);
  [...listItemsRef].map((item) => {
    console.log(" ");
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.childElementCount}`);
  });
}
getLogs();
