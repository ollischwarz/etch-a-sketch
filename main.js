let timeout;

window.addEventListener("load", () => {
  createGrid(64);
});

window.addEventListener("resize", () => {
  clearTimeout(timeout);
  timeout = setTimeout(createGrid(64), 1000);
});

let createGrid = (gridNumber) => {
  let grid = document.querySelector("#grid");
  grid.style.width = "50vw";
  grid.style.height = grid.style.width;
  grid.innerHTML = "";

  for (i = 0; i < gridNumber ** 2; i++) {
    let div = document.createElement("div");
    div.id = `${i + 1}`;
    div.className = `grid-div`;
    div.style.backgroundColor = getRandomColor();
    div.style.width = 100 / gridNumber + "%";
    div.style.height = div.style.width;
    grid.appendChild(div);
  }
};

let getRandomColor = () => {
  let R = Math.floor(Math.random() * 256);
  let G = Math.floor(Math.random() * 256);
  let B = Math.floor(Math.random() * 256);
  return `rgb(${R},${G},${B})`;
};