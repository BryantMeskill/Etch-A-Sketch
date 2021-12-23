const container = document.querySelector(".container");
const slider = document.querySelector(".slider");
const output = document.querySelector(".value");
output.innerHTML = slider.value;
slider.addEventListener("input", () => {
  output.innerHTML = slider.value;
});

createGrid();

function createGrid() {
  //selects all elements with the 'grid' class, and for each one, removes it from the DOM.
  document.querySelectorAll(".row").forEach((e) => e.remove());
  for (let i = 0; i < slider.value; i++) {
    const gridRow = document.createElement("div");
    //dummy class created for removing div and children with forEach above.
    gridRow.classList.add("row");
    container.appendChild(gridRow);
    for (let i = 0; i < slider.value; i++) {
      const gridBox = document.createElement("div");
      gridBox.classList.add("grid");
      gridBox.style.width = `${500 / slider.value}px`;
      gridBox.style.height = `${500 / slider.value}px`;
      gridRow.appendChild(gridBox);
      gridBox.addEventListener("mouseover", () => {
        gridBox.classList.add("trail");
      });
    }
  }
}

function eraseGrid() {
  container.classList.remove("shake"); // reset animation
  void container.offsetWidth; // trigger reflow
  container.classList.add("shake"); // start animation
  document.querySelectorAll(".row").forEach((e) => e.remove());
  createGrid();
}
