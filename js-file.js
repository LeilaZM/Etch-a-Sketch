
const container = document.getElementById('container');

const button = document.getElementById('button').addEventListener('click', function () {
    let amount = prompt("How many squares per line do you want?");
    clear();
    return makeGrid(amount)
});

function clear() {
    let blacks = document.querySelectorAll(".cellEtched");
    blacks.forEach(black => black.classList.remove("cellEtched"))
}

function makeGrid(amount) {
    container.style.setProperty('--grid-rows', amount);
    container.style.setProperty('--grid-cols', amount);

    for (i = 0; i < (amount * amount); i++) {
        let cell = document.createElement('div');
        cell.classList = "cell";
        container.appendChild(cell)
    }
    const cells = document.querySelectorAll(".cell").forEach(cell => {
        cell.addEventListener('mouseover', event => { cell.classList.add("cellEtched") })
    })
}


makeGrid(16)
