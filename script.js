const container = document.querySelector("#main")
const btn = document.querySelectorAll("#color")
const btnResize = document.querySelector("#resize")
const gridDivV = document.createElement("div")
let gridSize = 16
let oGridSize = 16
let color = "blue"

function createNGrid(){
    gridSize =  prompt("Enter new grid size")
    createGrid(gridSize, oGridSize)
    const gridDivHh = document.querySelectorAll(".grdH")
    gridDivHh.forEach(element => {
        console.log("1")
        element.addEventListener("mouseover", () =>{
            element.style.cssText = "background: "+ color +";"
        })
    });
}

function createGrid(gridSize, oGridSize){
    while (true){
        let isEmpty = document.getElementById('main').innerHTML === ""; 
        if (isEmpty){
            for(let i = 0; i < gridSize/2; i++){
                const gridDivV = document.createElement("div")
                gridDivV.classList.add("grdV")
                container.appendChild(gridDivV)
                for(let j = 0; j < gridSize/2; j++){
                    const gridDivH = document.createElement("div")
                    gridDivH.classList.add("grdH")
                    gridDivV.appendChild(gridDivH)
                }
            }
            oGridSize = gridSize
            break
        }
        else{
            const gridDivV = document.querySelectorAll(".grdV");
            gridDivV.forEach(element =>{
                container.removeChild(element)
            })
        }
    }
}

btnResize.addEventListener("click", createNGrid)


createGrid(gridSize, oGridSize)
const gridDivHh = document.querySelectorAll(".grdH")
btn.forEach(element => {
    element.addEventListener("click", () =>{
        color = element.textContent
        console.log(color)
    })
});

gridDivHh.forEach(element => {
    console.log("1")
    element.addEventListener("mouseover", () =>{
        element.style.cssText = "background: "+ color +";"
    })
});