let timeout;
let gridNumber = 16;
let divBackgroundColor = "#F3F7FB";
let hoverColor;
let switchValue = "OFF";

const colorSwitch = document.querySelector("#color-switch");
const resetBtn = document.querySelector("#reset");
const changeGridBtn = document.querySelector("#change-grid-size");
const currentGrid = document.querySelector("#current-grid-size");
const colorMode = document.querySelector("#color-mode-p");


window.addEventListener("load", () => {
    createGrid(gridNumber);
    checkColorValue(switchValue);
    colorMode.textContent = switchValue;
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
    };

    currentGrid.textContent = `${gridNumber}x${gridNumber}`;
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
    colorMode.textContent = switchValue;
    console.log(switchValue);
});

resetBtn.addEventListener("click", () => {
    createGrid(16);
    colorSwitch.checked = false;
    switchValue = colorSwitch.checked ? "ON" : "OFF";
    checkColorValue(switchValue);
});

changeGridBtn.addEventListener("click", () => {
    let userInput;
    let isValidNumber = false;

    while (!isValidNumber) {
        userInput = prompt("Choose a number between 1 and 100: ");
        userInput = Number(userInput);

        if (userInput === null) {
            console.log("Operation cancelled.");
            break;
        } else if (!isNaN(userInput) && userInput >= 1 && userInput <= 100) {
            isValidNumber = true;
            gridNumber = userInput;
            createGrid(gridNumber);
            console.log(`Number is within range: ${userInput}`);
        } else {
            alert("Number is out of the range. Valid range: 1 - 100.");
            break;
        }
    }
    console.log(`Final user input type: ${typeof userInput}`);
});

let getRandomColor = () => {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    return `rgb(${R},${G},${B})`;
};
