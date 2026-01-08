// Admin role
const role = localStorage.getItem("role");

// Hozir faqat admin bo‘lsa ishlaydi
if (role !== "admin") {
    alert("You are not authorized to view this page!");
    window.location.href = "index.html";
}

// Demo data
const projects = ["Mobile App", "API Upgrade"];
const tasks = ["Task A", "Task B", "Task C"];

// User management section yo‘q admin uchun
const userManagement = document.getElementById("userManagement");
if (userManagement) userManagement.style.display = "none";

// Render helper function
function renderList(id, items) {
    const ul = document.getElementById(id);
    if (!ul) return;
    ul.innerHTML = "";
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}

// Render projects and tasks
renderList("projectList", projects);
renderList("taskList", tasks);

// Button actions (demo)
function createProject() {
    const name = prompt("Enter project name:");
    if (name) {
        projects.push(name);
        renderList("projectList", projects);
    }
}

function createTask() {
    const title = prompt("Enter task title:");
    if (title) {
        tasks.push(title);
        renderList("taskList", tasks);
    }
}

// Logout
function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}
