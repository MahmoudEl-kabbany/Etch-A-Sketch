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

const eraserButton = document.querySelector(".eraser-button");
eraserButton.addEventListener("click", () => {
  const sketchSquares = document.querySelectorAll(".container div");
  sketchSquares.forEach((sketchSquare) => {
    sketchSquare.addEventListener("mouseover", () => {
      sketchSquare.style.backgroundColor = "white";
    });
  });
});

const rainbowButton = document.querySelector(".rainbow-button");
rainbowButton.addEventListener("click", () => {
  const sketchSquares = document.querySelectorAll(".container div");
  sketchSquares.forEach((sketchSquare) => {
    sketchSquare.addEventListener("mouseover", () => {
      randomR = Math.floor(Math.random() * 255);
      randomG = Math.floor(Math.random() * 255);
      randomB = Math.floor(Math.random() * 255);
      sketchSquare.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
    });
  });
});

const defaultButton = document.querySelector(".default-button");
defaultButton.addEventListener("click", () => {
  const sketchSquares = document.querySelectorAll(".container div");
  sketchSquares.forEach((sketchSquare) => {
    sketchSquare.addEventListener("mouseover", () => {
      sketchSquare.style.backgroundColor = "black";
    });
  });
});
