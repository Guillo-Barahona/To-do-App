let container = document.getElementById("container");
let inputBox = document.getElementById("input_box");
let listContainer = document.getElementById("list_container");



const button = document.getElementById("button");

button.addEventListener("click", addTask);



function addTask(){
    console.log("click");
    if(inputBox.value === ''){
        alert("Debes de escribir alguna Tarea!!")
    } 
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // icono de x
        li.appendChild(span);
    }
    inputBox.value = ""; // Resetea el texto del input 
    saveData();
};


listContainer.addEventListener("click", (e)=>{
    if (e.target.tagName === 'LI'){             //si se selecciona LI, se activa la clase 'checked'
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === 'SPAN'){      //si se selecciona la x (span), se elimina el parent element (li)
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);  //para almacenar en el local storage
}

function loadData (){
    listContainer.innerHTML = localStorage.getItem('data'); //para cargar el local storage
}

loadData();