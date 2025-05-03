 function inicio(){
    let imagenes = document.getElementsByClassName("place");
    for (let index = 0; index < imagenes.length; index++) {
        imagenes[index].addEventListener("click", (ev)=>{
            ev.preventDefault();
            ev.stopImmediatePropagation();
            let element = ev.target.parentNode.childNodes;
            element[1].classList.add("d-none");
            element[3].classList.remove("d-none");
        })
    }

    
    let volver = document.getElementsByClassName("volver");
    for (let index = 0; index < volver.length; index++) {
        volver[index].addEventListener("click", (ev)=>{
            ev.preventDefault();
            ev.stopImmediatePropagation();
            let element = ev.target.parentNode.childNodes; 
            element[3].classList.add("d-none");
            element[1].classList.remove("d-none");
        })
    }
 }


 window.onload =inicio;