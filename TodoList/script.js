const input = document.querySelector(".input")
let add = document.querySelector('#add')
// console.log(add.classList)
const list = document.querySelectorAll(".list")
// console.log(list);
const taskList = document.querySelector('.task-list')

let editTodo = null;

//* Add task function
const addTask = () => {
    if(input.value.trim() === ""){
        alert("kyu kyu karte ho aisa likh lo kuch pahele")
        return
    }

    console.log(add.classList);
    if(add.classList.contains("fa-pen")){
        editTodo.querySelector("li").innerText = input.value.trim();
        add.classList.remove("fa-pen");
        add.classList.add("fa-plus");
        taskList.appendChild(editTodo)
        input.value = ""; // Clear the input field
        editTodo = null;

    }else {

    const div = document.createElement('div')
    div.setAttribute("class","list")
    div.setAttribute("draggable","true")
   
    div.innerHTML=`<li>${input.value}</li>
                <i class="fa-solid fa-pen"></i>
                <i class="fa-solid fa-trash"></i>`;

    console.log(div);
    taskList.appendChild(div)
    
    input.value =""
    
    }

    
}

add.addEventListener('click',addTask)

//* removing the task function
taskList.addEventListener("click", (e) => {
    // console.log(e.target.tagName);
    if(e.target.tagName === 'I'){
        let task = e.target.parentNode
        task.remove()
    }
    
});

// * Drag and Drop function from here 
const taskList2 = document.querySelector(".task-list2");
const mainCard2 = document.querySelector(".main-card2")
const mainCard = document.querySelector(".main-card")


let selected = null;

document.body.addEventListener("dragstart", (e) => {
    // console.log("body", e.target.classList);
    if (e.target.classList.contains("list")) {
        selected = e.target;
    }
});


mainCard2.addEventListener('dragover', function(e){
    e.preventDefault()
    console.log(e.preventDefault());
})

mainCard2.addEventListener('drop',function(e){
    e.preventDefault();
    // console.log(selected);
    if(selected){
        taskList2.appendChild(selected)
        selected = null;
    }
})

mainCard.addEventListener('dragover', function(e){
    e.preventDefault();
})

mainCard.addEventListener('drop', function(e){
    e.preventDefault()
    if(selected){
        taskList.appendChild(selected)
        selected = null;
    }
})


//* Edit Function

const updateTodo = (e) => {
    console.log(e.target.parentNode)
    if(e.target.classList.contains('edit')){
        editTodo = e.target.parentNode;
    input.value = editTodo.querySelector("li").innerText;

    // Switch to edit mode
    add.classList.remove("fa-plus");
    add.classList.add("fa-pen");

    input.focus();
    }
}

//* Add task in Storage


taskList.addEventListener('click',updateTodo)