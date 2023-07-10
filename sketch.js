//Grab the grid container using the query selector
const gridContainer = document.querySelector("#gridContainer");
//Automatically default the paint color to black
let colorChoice = "black";

/**
 * This function creates the number of sqaures needed to create the Etch-A-Sketch
 * @param {*} size, the number of squares to create the grid
 */
function createGrid(size){
    for(let i = 0; i < (size * size); i++){
        //Create div elements which will be the squares
        let grid = document.createElement("div");
        //Add a class name called "grid" and and add it to the gridContainer class
        grid.classList.add("grid");
        gridContainer.appendChild(grid);

        //Organize the grid (the fr will make it so it won't overflow the container);
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 100fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${size}, 100fr)`;
    
       //Allow the grids to each be colored
        addColor(colorChoice);
    }
    
}

/**
 * Function that gets rid of all squares before making a new grid based off the new size
 */
function clearGrid(){
   //While the grid container still has a last child, remove the last child (more efficient than removing from the first child)
   while(gridContainer.lastChild){
     gridContainer.removeChild(gridContainer.lastChild);
   }
   
}

//Grab the size buttons and when pressed, create a new grid based on the according size on the button
const sizes = document.querySelectorAll(".size");
//Clear the grid and create a new one
sizes.forEach(size => size.addEventListener("click",function(){
    //First, clear the grid
    clearGrid();
    //If the user chose 100, slice the first 3 characters, else slice the first 2 characters and pass it through the createGrid function
    if(size.innerText.includes("100")){
        console.log(+(size.innerText.slice(0,3).trim()));
        console.log(typeof(+(size.innerText.slice(0,3).trim())));
        createGrid(+(size.innerText.slice(0,3).trim()) );
    }
    else {
        createGrid(+(size.innerText.slice(0,2).trim()) );
    }
   
}));

//Get every button option that has an color option (besides the Rainbow option)
const colors = document.querySelectorAll(".color");
colors.forEach(color => color.addEventListener("click", function(){
    colorChoice = this.innerText;
    addColor(colorChoice);
}));

/**
 * Function that accesses each square in the grid container to make it be colored
 */
function addColor(colorChoice){
   //Get each individual sqaure from the grid
    const squares = document.querySelectorAll(".grid");
    //When the mouse is holding down and hovered, turn the squares black
    squares.forEach(square => square.addEventListener("mousedown",function(){
        squares.forEach(square => square.addEventListener("mouseover",function(){
            square.setAttribute('style', `background: ${colorChoice};`);  
        }));
    }));
}


//Button to reset the grid back to white
const reset = document.querySelector("#reset");
reset.addEventListener("click",function(){
    squares.forEach(square => square.setAttribute('style', 'background: white;'));  
});


//Automatically default the Etch-A-Sketch to a 16 x 16
createGrid(16);
addColor(colorChoice);
