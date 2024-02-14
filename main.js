let timeout;

window.addEventListener('load', () => {
    let gridNumber = 16;
    createGrid(gridNumber);
});

window.addEventListener('resize', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        let gridWidth = grid.offsetWidth;
        console.log('Current grid width:', gridWidth);
        console.log('Current div width:', gridWidth);
    }, 50);
});

let createGrid = (gridNumber) => {
    for (i = 0; i < (gridNumber ** 2); i++) {
        let grid = document.querySelector('#grid');
        let div = document.createElement('div');
        div.id = `div-${i + 1}`;
        div.textContent = div.id;
        div.style.width = (100 / gridNumber) + '%';
        div.style.height = div.style.width;
        grid.appendChild(div);
        console.log(div.id);
    }
};
