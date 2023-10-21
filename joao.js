const button = document.getElementById('addButton');
const input = document.querySelector ('input');
const ul = document.querySelector('ul');
const todayList = document.getElementById('todayList');
const tomorrowList = document.getElementById('tomorrowList');
const timeList = document.getElementById('timeList');
const finishedList = document.getElementById('finishedList')

input.focus();
//High order variable for add button
button.addEventListener('click', handleClick);

function handleClick() {
  //general input treatment, makes user have to type something and clears whitespace
  const inputValue = input.value.trim();
  if (inputValue === '') return;
//deadline input to asign right table
  const deadlineSelect = document.getElementById('deadlineSelect');
  const selectedDeadline = deadlineSelect.options[deadlineSelect.selectedIndex].value;
//li variables
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = inputValue;
//delete icon variables
  const icon = document.createElement('i');
  icon.classList = 'fa-solid fa-trash';
//edit icon variables
  const iconEdit = document.createElement('i');
  iconEdit.classList = 'fa-solid fa-pen'
  
  const iconSpanDiv = document.createElement('div')
  iconSpanDiv.classList.add('iconText')
//append edit icon + text
  li.appendChild(iconSpanDiv);
  iconSpanDiv.appendChild(iconEdit);
  iconSpanDiv.appendChild(span);
 //append delete button
  li.appendChild(icon)

// edit button 
let isEditing = false;


iconEdit.addEventListener('click', () => {
  if (isEditing) {
    return;
  }
  span.contentEditable = true;
  span.focus();
  input.classList.add('editing');
  isEditing = true;
});

 span.addEventListener('click', () => {
   if (!isEditing) {
     li.classList.toggle('checked');
   }
   else{
    li.classList.toggle('unchecked')
   }
 });

span.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    span.contentEditable = false;
    isEditing = false;
    input.classList.remove('editing');
  }
  });

span.addEventListener('blur', () => {
  span.contentEditable = false;
  isEditing = false;
  input.classList.remove('editing');
});

//condition to insert the deadline input into the right table
  if (selectedDeadline === 'today') {
    todayList.appendChild(li);
  } else if (selectedDeadline === 'tomorrow') {
    tomorrowList.appendChild(li);
  } else if (selectedDeadline === 'youHaveTime') {
    timeList.appendChild(li);
  }
//remove button function
  icon.addEventListener('click', () => {
    li.parentElement.removeChild(li);
  });
//dashed text on click

iconDone = document.createElement('i')
iconDone.classList = ('fa-solid fa-check')

  span.addEventListener('click', () => {
    span.classList.toggle('checked');

    if(!iconDone.parentElement){
      iconSpanDiv.appendChild(iconDone)
    }
    else{
      iconDone.remove()
    }
  });

  iconDone.addEventListener('click', () =>{
    finishedList.appendChild(li)
  })
  // icons
const prioritySelect = document.getElementById("prioritySelect").value;
listItem.setAttribute("data-priority", prioritySelect);
  input.value = '';
}
//welcome loading screen
document.addEventListener("DOMContentLoaded", function () {
  const welcomeContent = document.getElementById("welcome-content");
  const continueButton = document.getElementById("continue-button");
  const siteContent = document.getElementById("site-content");
  const runButton = document.getElementById("run-button");
  continueButton.addEventListener("click", function () {
    siteContent.style.display = "block";
    welcomeContent.style.display = "none";
  });
  runButton.addEventListener("mouseover", function () {
    const maxX = window.innerWidth - runButton.clientWidth;
    const maxY = window.innerHeight - runButton.clientHeight;
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    runButton.style.left = newX + "px";
    runButton.style.top = newY + "px";
  });
});

