const inputBox=document.getElementById ("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if (inputBox.value ===  ``){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function (e)
{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
},false );
/*Movemant*/ 
document.getElementById("moveCheckedToCompleted").addEventListener("click", function () {
    const checkedTasks = document.querySelectorAll(".checked");
    const completedContainer = document.querySelector(".Completed-Task1");
    checkedTasks.forEach(function (task) {
      completedContainer.appendChild(task);
      task.classList.add(Today-list);
    });
  });
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  /*save data*/
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML= localStorage.getItem("data");
}
showTask();
// calendar
 const calendar = document.getElementById("calendar");
function showCalendar() {
    calendar.style.display = "block";
    createCalendar();
}   
function hideCalendar() {
    calendar.style.display = "none";
}
// drop down menu
function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
  }

  // when you click another empty place drown down is hiding
 window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
     if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
        }
      }
    }
  }
  //Welcome
  document.addEventListener("DOMContentLoaded", function () {
    const welcomeContent = document.getElementById("welcome-content");
    const continueButton = document.getElementById("continue-button");
    const siteContent = document.getElementById("site-content");
    continueButton.addEventListener("click", function () {
        siteContent.style.display = "block";
        welcomeContent.style.display = "none";
    });
});