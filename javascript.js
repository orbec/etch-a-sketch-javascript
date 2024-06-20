const body = document.querySelector("body");

function squareDivs (divs)  {
    const divContainer = document.createElement("div");
    divContainer.classList.add("container");
    divContainer.id = "container";
    body.appendChild(divContainer);
    for (let i = 0; i < divs; i++){
        const divRow = document.createElement("div");
        divRow.classList = "row";
        divContainer.appendChild(divRow);
        for (let j = 0; j < divs; j++){
            const divCell = document.createElement("div");
            divCell.classList.add("cell");
            divRow.appendChild(divCell);
            divCell.addEventListener("mouseover", () => {
                
                const r = Math.floor(Math.random() * 255);
                const g = Math.floor(Math.random() * 255);
                const b = Math.floor(Math.random() * 255);
                const opacity = window.getComputedStyle(divCell).getPropertyValue("opacity");
                console.log(`background-color: rgb(${r}, ${g}, ${b});`);
                divCell.style = `opacity: ${opacity-0.1}; background-color: rgb(${r}, ${g}, ${b});`;
            });
        }
    }
}

function deleteGrid(){
    const toRemove = document.querySelector("#container");
    if (toRemove){
        body.removeChild(toRemove);
    }
    
}

function promptUser(){
    let again = true;
    let divs = prompt(`Digit the number of squares, max 100`);
    while (again){
        if (typeof divs === "number" || divs <= 100){
            again = false;
        }else{
            divs = prompt(`Digit the number of squares, max 100`);
        }
    }
    deleteGrid();
    squareDivs(divs);
}
