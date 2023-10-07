
const taskInput = document.getElementById("taskInput"); 
const addTaskButton = document.getElementById("addTask"); 


function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') { 
        const li = document.createElement("li");
        li.textContent = taskText; 

        taskList.appendChild(li); // 
        taskInput.value = ""; // 
    }
}

addTaskButton.addEventListener("click", addTask);


taskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
