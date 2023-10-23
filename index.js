const add = document.querySelector(".add")
const newToDo = document.createElement("div")
newToDo.classList.add('todo')


add.addEventListener("click", () => {
    document.body.appendChild(newToDo)
    
})