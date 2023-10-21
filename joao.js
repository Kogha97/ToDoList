// all variables needed
const button = document.getElementById('addButton');
const input = document.querySelector ('input');
const ul = document.querySelector('ul');
const todayList = document.getElementById('todayList');
const tomorrowList = document.getElementById('tomorrowList');
const timeList = document.getElementById('timeList');
const finishedList = document.getElementById('finishedList');

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


input.focus();
//High order variable for add button
button.addEventListener('click', handleClick)

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
    //after the checked its going finishedlist
    finishedList.appendChild(li);
    li.classList.add('checked');
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
  li.addEventListener('click', () => {
    span.classList.toggle('checked');
  });
  input.value = '';
}
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
  li.addEventListener('click', () => {
    span.classList.toggle('checked');
  });
  input.value = '';



/* W Functionality to add

EDIT BUTTON

add edit button  next to do delete -> on click allows to edit the list item.


1) create an edit icon when list is created (DONE)

2) create a function to click the edit button => on that function make it edit the text

      when click the button, we get a new input window where the text was, with the current text
      so the user can change it


FINISHED TASK

when checked -> add button -> button moves to finished list

1) create icon when checked is clicked

2) create function for when icon is clicked the item is moved to finished list

possible idea for finished task

  if( 'checked' === true){
    moveButton();
  }

Possible work on buttons, to make the priority / deadline appear has priority / deadline

*/