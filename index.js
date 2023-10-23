const add = document.querySelector(".add")
const dialog = document.querySelector('dialog')
const save = document.querySelector('.save')
const note = document.querySelector('.container')

add.addEventListener("click", () =>{
    dialog.style.display = 'flex'
})

save.addEventListener('click', () => {
    console.log("Saved")
    dialog.style.display = 'none'

    note.innerHTML = `<div class="todo">
    <div class="header">
        <h4>What to do</h4>
    </div>
    <div class="thingToDo">
        <p>This is what I want to achieve </p>
    </div>
    <div class="complete">
        <button class="done">Done</button>
    </div>`
    document.body.appendChild(note)
})
