const container = document.querySelector(".container");
//currently calling it manually, will need to set parameter for user input in newer version
function createGrid() {
  for (let i = 0; i < 16; i++) {
    for (let i = 0; i < 16; i++) {
      const gridDiv = document.createElement("div");
      gridDiv.classList.add("grid");
      container.appendChild(gridDiv);
      gridDiv.addEventListener("mouseover", () => {
        gridDiv.classList.add("trail");
      });
    }
  }
}

createGrid();
