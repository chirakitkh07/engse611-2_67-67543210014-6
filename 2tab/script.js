function openTab(event, tabName) {
    let tabs = document.querySelectorAll(".tab-content");
    let buttons = document.querySelectorAll(".tab-button");

    tabs.forEach(tab => tab.classList.remove("active"));
    buttons.forEach(button => button.classList.remove("active"));

    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}

function changeImage(imgElement) {
    document.getElementById("mainImage").src = imgElement.src;
}

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") return;

    let li = document.createElement("li");
    li.textContent = taskInput.value;
    li.onclick = () => li.classList.toggle("completed");
    taskList.appendChild(li);
    taskInput.value = "";
}

function clearCompleted() {
    let completedTasks = document.querySelectorAll(".completed");
    completedTasks.forEach(task => task.remove());
}

function clearAll() {
    document.getElementById("taskList").innerHTML = "";
}
