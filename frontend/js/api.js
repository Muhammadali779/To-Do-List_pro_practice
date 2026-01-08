const API_BASE = "http://localhost:8000/api/v1"; // o‘z backend url

function apiFetch(endpoint, method = "GET", body = null) {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  };

  return fetch(API_BASE + endpoint, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null
  })
  .then(res => res.json());
}
