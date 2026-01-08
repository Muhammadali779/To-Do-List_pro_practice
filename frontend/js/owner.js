const role = localStorage.getItem("role");

// Hide user management if not owner
if (role !== "owner") {
  document.getElementById("userManagement").style.display = "none";
}

// Demo data
const projects = ["Website Redesign", "Mobile App"];
const tasks = ["Task 1", "Task 2", "Task 3"];
const users = ["Alice", "Bob", "Charlie"];

// Render lists
function renderList(id, items) {
  const ul = document.getElementById(id);
  ul.innerHTML = "";
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

renderList("projectList", projects);
renderList("taskList", tasks);
renderList("userList", users);

// Button actions (demo)
function createProject() { alert("Create Project clicked"); }
function createTask() { alert("Create Task clicked"); }
function addUser() { alert("Add User clicked"); }
