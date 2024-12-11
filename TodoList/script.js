const input = document.querySelector(".input")
const add = document.querySelector('.add')
// const trash = document.querySelectorAll(".trash")
const list = document.querySelectorAll(".list")
// console.log(list);
const taskList = document.querySelector('.task-list')
const mainCard = document.querySelector(".main-card")

const addTask = () => {
    if(input.value.trim() === ""){
        alert("please enter a task")
        return
    }

    const div = document.createElement('div')
    div.setAttribute("class","list")
    div.setAttribute("draggable","true")
   
    div.innerHTML=`<li>${input.value}</li>
                <i class="fa-solid fa-trash"></i>`;

    console.log(div);
    taskList.appendChild(div)
    
    input.value =""

    
}

add.addEventListener('click',addTask)

//removing the task
taskList.addEventListener("click", (e) => {
    console.log(e.target.tagName);
    if(e.target.tagName === 'I'){
        let task = e.target.parentNode
        task.remove()
    }
    
});


const taskList2 = document.querySelector(".task-list2");
const mainCard2 = document.querySelector(".main-card2")

let selected = null;

document.body.addEventListener("dragstart", (e) => {
    console.log("body", e.target.classList);
    if (e.target.classList.contains("list")) {
        selected = e.target;
    }
});

// for(let li of list){
//     // console.log(li)
//     li.addEventListener('dragstart', function(e){
//         // console.log(e.target)
//         selected = e.target
//         return selected
//     })
// }

mainCard2.addEventListener('dragover', function(e){
    e.preventDefault()
    console.log(e.preventDefault());
})

mainCard2.addEventListener('drop',function(e){
    e.preventDefault();
    console.log(selected);
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

console.log(taskList);