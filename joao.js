
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
//delete icon
  const icon = document.createElement('i');
  icon.classList = 'fa-solid fa-x';

  li.appendChild(span);
  li.appendChild(icon);
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
    li.classList.toggle('checked');
  });

  input.value = '';
}