let color ="black"; // we put this as default color, to use it later and change it in functions(changeColor and colorSquare)
let click = true; // this to make only the click mouseover happens when we click


function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;
    for (i = 0; i<amount; i++) { // loop is important to create the color of the small div square
        let square = document.createElement('div');
        square.addEventListener("mouseover", colorSquare);
        square.style.background = "white";
        board.insertAdjacentElement("beforeend", square); //insertAdjacentElement will add the square div which is blue color to the container board, which has grid 16x16
}
}
populateBoard(16);

function changeSize(input) {
    if (input >= 2 && input <=100) {
        populateBoard(input); // input will be over(size) parameter
    } else {
        console.log("to many or to less squares!")
    }
}

function colorSquare() {
}
function colorSquare() {
    if (!click) { //this with click value top, and event listener below to make only the click mouseover happens when we click
        if(color == 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.background = color; // we used (this) because if we use square.style.background it will show that square is not defined. thus we can use square as global variable but we need square in the loop, so we put (this) to solve the issue // ex: if we have Ali = 26. then : this. will show 26, as it will show the what is the value equal.
        }
    }

}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector("body").addEventListener("click", () => {
    click = !click;
})