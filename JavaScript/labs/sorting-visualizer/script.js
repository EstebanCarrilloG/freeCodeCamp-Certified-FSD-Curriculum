function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}


function generateArray() {
  return Array.from({ length: 5 }, generateElement);
}


function generateContainer() {
  return document.createElement('div');
}


function fillArrContainer(container, arr) {
  container.innerHTML = '';
  arr.forEach(n => {
    const s = document.createElement('span');
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
  const spans = container.querySelectorAll('span');
  if (spans[index]) spans[index].style.border = '2px dashed red';
  if (spans[index + 1]) spans[index + 1].style.border = '2px dashed red';
}


const generateBtn = document.getElementById('generate-btn');
const sortBtn = document.getElementById('sort-btn');
const arrayContainer = document.getElementById('array-container'); 

const startingArrayDiv = document.getElementById('starting-array');

let currentArray = [];


generateBtn.addEventListener('click', () => {
  currentArray = generateArray();
  fillArrContainer(startingArrayDiv, currentArray);
  highlightCurrentEls(startingArrayDiv, 0);


  Array.from(arrayContainer.children).forEach(child => {
    if (child !== startingArrayDiv) arrayContainer.removeChild(child);
  });
});


sortBtn.addEventListener('click', () => {
  if (!currentArray || currentArray.length === 0) return;

 
  Array.from(arrayContainer.children).forEach(child => {
    if (child !== startingArrayDiv) arrayContainer.removeChild(child);
  });

 
  fillArrContainer(startingArrayDiv, currentArray);
  highlightCurrentEls(startingArrayDiv, 0);


  const arr = [...currentArray];
  const n = arr.length;

  for (let pass = 0; pass < n - 1; pass++) {
    for (let j = 0; j < n - pass - 1; j++) {

      const beforeDiv = generateContainer();
      fillArrContainer(beforeDiv, arr);
      highlightCurrentEls(beforeDiv, j);
      arrayContainer.appendChild(beforeDiv);


      const needSwap = !isOrdered(arr[j], arr[j + 1]);
      if (needSwap) {
        swapElements(arr, j);
        
        const afterDiv = generateContainer();
        fillArrContainer(afterDiv, arr);
        highlightCurrentEls(afterDiv, j);
        arrayContainer.appendChild(afterDiv);
      }
    }
  }


  const finalDiv = generateContainer();
  fillArrContainer(finalDiv, arr);
  arrayContainer.appendChild(finalDiv);

  fillArrContainer(startingArrayDiv, currentArray);
  highlightCurrentEls(startingArrayDiv, 0);
});