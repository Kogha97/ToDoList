// add the input to a list:
document.getElementById("addToDo").addEventListener("click", addTask);
// create addTask function (it is used as a callback above)
function addTask() {
  const taskValue = document.getElementById("inputField").value;
  if (taskValue.trim() === "") {
    alert("There is no task to add yet 🤦‍♀️");
    return;
  }

  //send the input to the correct list:
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

  //enter the value to the <li> and add to appropriate list
  const listItem = document.createElement("li");
  listItem.textContent = taskValue;
  targetList.appendChild(listItem);

  //Clear the input field for the next task
  document.getElementById("inputField").value = "";
}
