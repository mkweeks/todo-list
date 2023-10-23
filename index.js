const add = document.querySelector(".add")
const dialog = document.querySelector('dialog')
const save = document.querySelector('.save')
const todo = document.createElement('div')
const note = document.querySelector('.container')

add.addEventListener("click", () =>{
    dialog.style.display = 'flex';

})

save.addEventListener('click', () => {
    console.log("Saved")
    dialog.style.display = 'none'

    const value = document.querySelector('input').value

})
