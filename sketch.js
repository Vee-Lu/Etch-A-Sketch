const container = document.querySelector(".container");

function createGrid(rows,columns){
    for(let i = 0; i < (rows * columns); i++){
        let grid = document.createElement("div");
        grid.classList.add("grid");
        container.style.gridTemplateColumns = `repeat(${rows}, 100fr)`;
        container.style.gridTemplateRows = `repeat(${columns}, 100fr)`;
        container.appendChild(grid);
    }
    
}

createGrid(32,32);

//Get each individual sqaure from the grid
const squares = document.querySelectorAll(".grid");

//When the mouse is holding down and hovered, turn the squares black
squares.forEach(square => square.addEventListener("mousedown",function(){
    squares.forEach(square => square.addEventListener("mouseover",function(){
        square.setAttribute('style', 'background: black;');  
    }));
}));

//Button to reset the grid back to white
const reset = document.querySelector(".reset");
reset.addEventListener("click",function(){
    squares.forEach(square => square.setAttribute('style', 'background: white;'));  
});
