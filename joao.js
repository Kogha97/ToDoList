const button = document.getElementById('button-add')
const input = document.querySelector ('input')
const ul = document.querySelector('ul')

button.addEventListener('click', handleClick)

function handleClick(){
    if(input.value === '') return

    const li = document.createElement('li')
    li.textContent = input.value
    ul.appendChild(li)

    //
    const icon = document.createElement('i')
    icon.textContent = ' '
    icon.classList = 'fa-solid fa-trash'

    li.appendChild(icon)

    icon.addEventListener('click', () =>{
        ul.removeChild(li)
    })
    input.value = '';
}