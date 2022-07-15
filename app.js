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

const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", () => {
  const sketchSquares = document.querySelectorAll(".container div");
  sketchSquares.forEach((sketchSquare) => {
    sketchSquare.style.backgroundColor = "white";
  });
});

const resizeButton = document.querySelector(".resize-button");
resizeButton.addEventListener("click", () => {
  numSquares = parseInt(
    prompt("How many squares do you want in new board (max 100 and min 1)")
  );
  while (Object.is(numSquares, NaN)) {
    numSquares = parseInt(
      prompt("Enter again; entry is empty or a string(max 100 and min 1)")
    );
  }
  while (numSquares >= 101 || numSquares <= 0) {
    numSquares = parseInt(
      prompt("Enter again; number is out of range (max 100 and min 1)")
    );
  }
  const sizeIndicator = document.querySelector("h6");
  sizeIndicator.textContent = `Current size is ${numSquares}x${numSquares}`;
  const sketchBoard = document.querySelector(".container");
  while (sketchBoard.hasChildNodes()) {
    sketchBoard.removeChild(sketchBoard.firstChild);
  }
  for (let i = 1; i <= numSquares; i++) {
    for (let i = 1; i <= numSquares; i++) {
      const sketchSquare = document.createElement("div");
      sketchSquare.style.width = `${CONTAINER_WIDTH / numSquares}px`;
      sketchSquare.style.height = `${CONTAINER_WIDTH / numSquares}px`;
      sketchSquare.addEventListener("mouseover", () => {
        sketchSquare.style.backgroundColor = "black";
      });
      sketchBoard.appendChild(sketchSquare);
    }
  }
});
