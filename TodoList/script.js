const input = document.querySelector(".input")
const add = document.querySelector('.add')
// const trash = document.querySelectorAll(".trash")
const list = document.querySelector(".list")
// console.log(add);
const taskList = document.querySelector('.task-list')

const addTask = () => {
    if(input.value.trim() === ""){
        alert("please enter a task")
        return
    }

    const div = document.createElement('div')
    div.setAttribute("class","list")
    div.innerHTML=`<li>${input.value}</li>
                <i class="fa-solid fa-trash"></i>`;

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