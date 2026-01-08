const myTasks = ["Finish report", "Update documentation", "Fix bug #12"];

const taskContainer = document.getElementById("myTasks");
taskContainer.innerHTML = "";

myTasks.forEach(task => {
  const li = document.createElement("li");
  li.textContent = task;
  taskContainer.appendChild(li);
});
