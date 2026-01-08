function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Demo login (role aniqlash)
  let role = "member"; // default
  if (email.includes("owner")) role = "owner";
  else if (email.includes("admin")) role = "admin";

  localStorage.setItem("token", "FAKE_TOKEN");
  localStorage.setItem("role", role);

  // Redirect based on role
  if (role === "member") {
    window.location.href = "my-tasks.html";
  } else {
    window.location.href = "dashboard.html";
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}
