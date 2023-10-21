// add the input to a list:
document.getElementById("addToDo").addEventListener("click", addTask);
// create addTask function (it is used as a callback above)
function addTask() {
  const taskValue = document.getElementById("inputField").value;
  if (taskValue.trim() === "") {
    alert("There is no task to add yet 🤦‍♀️");
    return;
  }

  // Send the input to the correct list:
  const selectedDeadline = document.getElementById("listSelection").value;

  let targetList;
  switch (selectedDeadline) {
    case "today":
      targetList = document.getElementById("todoListToday");
      break;
    case "tomorrow":
      targetList = document.getElementById("todoListTomorrow");
      break;
    case "later":
      targetList = document.getElementById("todoListLater");
      break;
  }

  // Create the list item and set its text
  const listItem = document.createElement("li");
  listItem.textContent = taskValue;

  // Set the priority as a data attribute on the list item
  const selectedPriority = document.getElementById("prioritySelection").value;
  listItem.setAttribute("data-priority", selectedPriority);

  // Create the delete button and append it to the list item
  const deleteBtn = document.createElement("span");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'; // Font Awesome trashcan icon
  deleteBtn.addEventListener("click", function () {
    listItem.remove();
  });
  listItem.appendChild(deleteBtn);

  // Add click event to the list item for editing
  listItem.addEventListener("click", editTask);

  // Append the list item to the target list
  targetList.appendChild(listItem);

  // Clear the input field for the next task
  document.getElementById("inputField").value = "";
}

function editTask(e) {
  const listItem = e.target;
  const currentText = listItem.textContent;

  // Create an input element and set its value to the current task
  const input = document.createElement("input");
  input.value = currentText;

  // Replace the list item's content with the input element
  listItem.textContent = "";
  listItem.appendChild(input);

  // Focus on the input element
  input.focus();

  // Add event listeners to the input element
  input.addEventListener("blur", updateTask);
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      input.blur(); // Triggers the "blur" event
    }
  });
}

function updateTask(e) {
  const input = e.target;
  const listItem = input.parentNode;
  const updatedText = input.value.trim();

  if (updatedText === "") {
    listItem.remove();
  } else {
    listItem.textContent = updatedText;
  }

  // Add the delete button back to the list item after editing
  const deleteBtn = document.createElement("span");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'; // Font Awesome trashcan icon
  deleteBtn.addEventListener("click", function () {
    listItem.remove();
  });
  listItem.appendChild(deleteBtn);
}
