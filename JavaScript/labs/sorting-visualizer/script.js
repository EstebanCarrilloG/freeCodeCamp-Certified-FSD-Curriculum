function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateArray() {
  return Array.from({ length: 5 }, generateElement);
}

function generateContainer() {
  return document.createElement("div");
}

function fillArrContainer(container, arr) {
  container.innerHTML = "";
  arr.forEach((n) => {
    const s = document.createElement("span");
    s.textContent = n;
    container.appendChild(s);
  });
}

function isOrdered(a, b) {
  return a <= b;
}

function swapElements(arr, index) {
  if (!isOrdered(arr[index], arr[index + 1])) {
    const tmp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = tmp;
  }
}

function highlightCurrentEls(container, index) {
  const spans = container.querySelectorAll("span");
  if (spans[index]) spans[index].style.border = "2px dashed red";
  if (spans[index + 1]) spans[index + 1].style.border = "2px dashed red";
}

const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");
const arrayContainer = document.getElementById("array-container");

const startingArrayDiv = document.getElementById("starting-array");

let currentArray = [];

generateBtn.addEventListener("click", () => {
  currentArray = generateArray();
  fillArrContainer(startingArrayDiv, currentArray);

  Array.from(arrayContainer.children).forEach((child) => {
    if (child !== startingArrayDiv) arrayContainer.removeChild(child);
  });
});

sortBtn.addEventListener("click", () => {
  if (!currentArray || currentArray.length === 0) return;

  

  fillArrContainer(startingArrayDiv, currentArray);
  Array.from(arrayContainer.children).forEach((child) => {
    if (child !== startingArrayDiv) arrayContainer.removeChild(child);
  });

  const arr = [...currentArray];
  const n = arr.length - 1;
  let counter = 0;
  while (true) {
    for (let pass = 0; pass < n; pass++) {
      let nextNumber = pass + 1;

      const needSwap = !isOrdered(arr[pass], arr[nextNumber]);

      const beforeDiv = generateContainer();
      fillArrContainer(beforeDiv, arr);
      highlightCurrentEls(beforeDiv, pass);

      arrayContainer.appendChild(beforeDiv);

      if (needSwap) {
        swapElements(arr, pass);
        counter++;
      }
    }
    if (counter === 0) {
      break;
    }

    counter = 0;
  }

  const nodeToDelete = arrayContainer.children[1] 
  arrayContainer.removeChild(nodeToDelete);

  const finalDiv = generateContainer();
  fillArrContainer(finalDiv, arr);
  arrayContainer.appendChild(finalDiv);

  fillArrContainer(startingArrayDiv, currentArray);
  highlightCurrentEls(startingArrayDiv, 0);
});
