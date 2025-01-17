const container = document.querySelector("#main")
const btn = document.querySelectorAll("#color")
const btnResize = document.querySelector("#resize")
const gridDivV = document.createElement("div")
let gridSize = 16
let color = "blue"

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

btnResize.addEventListener("click", () =>{
    newGridSize = prompt("Enter grid size")
    for(let i = 0; i < gridSize/2; i++){
        gridDivV.removeChild(gridDivH)
        for(let j = 0; j < gridSize/2; j++){
            container.removeChild(gridDivV)
        }
    }
    for(let i = 0; i < newGridSize/2; i++){
        const gridDivV = document.createElement("div")
        gridDivV.classList.add("grdV")
        container.appendChild(gridDivV)
        for(let j = 0; j < newGridSize/2; j++){
            const gridDivH = document.createElement("div")
            gridDivH.classList.add("grdH")
            gridDivV.appendChild(gridDivH)
        }
    }
})

const gridDivH = document.querySelectorAll(".grdH")

btn.forEach(element => {
    element.addEventListener("click", () =>{
        color = element.textContent
        console.log(color)
    })
});

gridDivH.forEach(element => {
    element.addEventListener("mouseover", () =>{
        element.style.cssText = "background: "+ color +";"
    })
});