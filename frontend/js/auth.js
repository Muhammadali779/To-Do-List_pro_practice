function login() {
  // fake login flow
  localStorage.setItem("token", "FAKE_TOKEN");
  localStorage.setItem("role", "owner"); // owner / admin / member

  if (localStorage.role === "member") {
    window.location.href = "my-tasks.html";
  } else {
    window.location.href = "dashboard.html";
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}
