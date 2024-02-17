let timeout;
let gridNumber = 32;
let divBackgroundColor = "#e7e7e7";
let hoverColor;
let switchValue = "OFF";

const colorSwitch = document.querySelector("#color-switch");


window.addEventListener("load", () => {
    createGrid(gridNumber);
    checkColorValue(switchValue);
});

window.addEventListener("resize", () => {
    clearTimeout(timeout);
    timeout = setTimeout(updateGridSize(), 1000);
});

let checkColorValue = (switchValue) => {
    if (switchValue === "OFF") {
        hoverColor = "#4F4F4F"
    } else {
        hoverColor = getRandomColor();
    }
    return hoverColor;
};

let createGrid = (gridNumber) => {
    let grid = document.querySelector("#grid");
    grid.style.width = "50vw";
    grid.style.height = grid.style.width;
    grid.innerHTML = "";

    for (i = 0; i < gridNumber ** 2; i++) {
        let div = document.createElement("div");
        div.id = `${i + 1}`;
        div.className = `grid-div`;
        div.style.backgroundColor = divBackgroundColor;
        div.style.width = 100 / gridNumber + "%";
        div.style.height = div.style.width;
        grid.appendChild(div);
    }
};

let updateGridSize = () => {
    let grid = document.querySelector("#grid");
    grid.style.width = "50vw";
    grid.style.height = grid.style.width;
};

grid.addEventListener("mouseover", (event) => {
    let target = event.target;
    checkColorValue(switchValue);
    target.style.backgroundColor = hoverColor;
});

colorSwitch.addEventListener("change", () => {
    switchValue = colorSwitch.checked ? "ON" : "OFF";
    console.log(switchValue);
});

let getRandomColor = () => {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    return `rgb(${R},${G},${B})`;
};
