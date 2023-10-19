
// all variables needed
const button = document.getElementById('addButton');
const input = document.querySelector ('input');
const ul = document.querySelector('ul');
const todayList = document.getElementById('todayList');
const tomorrowList = document.getElementById('tomorrowList');
const timeList = document.getElementById('timeList');
const finishedList = document.getElementById('finishedList')

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
 //apopend delete button
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

  li.addEventListener('click', () => {
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
  

  input.value = '';

}

/* W Functionality to add

EDIT BUTTON

add edit button  next to do delete -> on click allows to edit the list item.


1) create an edit icon when list is created (DONE)

2) create a function to click the edit button => on that function make it edit the text (DONE)

      when click the button, we get a new input window where the text was, with the current text
      so the user can change it


FINISHED TASK (DONE)

when checked -> add button -> button moves to finished list

1) create icon when checked is clicked

2) create function for when icon is clicked the item is moved to finished list

possible idea for finished task

  if( 'checked' === true){
    moveButton();
  }

Possible work on buttons, to make the priority / deadline appear has priority / deadline

*/