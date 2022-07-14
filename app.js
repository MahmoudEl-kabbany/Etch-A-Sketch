const CONTAINER_WIDTH = 560;

const sketchBoard = document.querySelector(".container");

for (let i = 1; i <= 16; i++) {
  for (let i = 1; i <= 16; i++) {
    const sketchSquare = document.createElement("div");
    sketchSquare.style.width = `${CONTAINER_WIDTH / 16}px`;
    sketchSquare.style.height = `${CONTAINER_WIDTH / 16}px`;
    sketchSquare.addEventListener("mouseover", () => {
      sketchSquare.style.backgroundColor = "black";
    });
    sketchBoard.appendChild(sketchSquare);
  }
}
