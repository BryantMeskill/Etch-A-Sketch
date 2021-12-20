const container = document.querySelector(".container");
const gridButton = document.querySelector("grid-button");
const sizeSlider = document.querySelector("user-input");

for (let i = 0; i < 16; i++) {
  const gridRow = document.createElement("div");
  container.appendChild(gridRow);
  for (let i = 0; i < 16; i++) {
    const gridBox = document.createElement("div");
    gridBox.classList.add("grid");
    gridBox.style.width = `${500 / 16}px`;
    gridBox.style.height = `${500 / 16}px`;
    gridRow.appendChild(gridBox);
    gridBox.addEventListener("mouseover", () => {
      gridBox.classList.add("trail");
    });
  }
}

function createGrid(userInput) {
  //selects all elements with the 'grid' class, and for each one, removes it from the DOM.
  document.querySelectorAll(".grid").forEach((e) => e.remove());
  userInput = prompt("Please input new grid size.", 16);
  while (userInput > 100 || isNaN(userInput) === true) {
    userInput = prompt("Please input new grid size. Max is 100.");
  }
  for (let i = 0; i < userInput; i++) {
    const gridRow = document.createElement("div");
    container.appendChild(gridRow);
    for (let i = 0; i < userInput; i++) {
      const gridBox = document.createElement("div");
      gridBox.classList.add("grid");
      gridBox.style.width = `${500 / userInput}px`;
      gridBox.style.height = `${500 / userInput}px`;
      gridRow.appendChild(gridBox);
      gridBox.addEventListener("mouseover", () => {
        gridBox.classList.add("trail");
      });
    }
  }
}
