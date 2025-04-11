/* === script.js === */

document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorDisplay = document.getElementById("formError");

  errorDisplay.textContent = "";

  if (!name || !email || !message) {
    e.preventDefault();
    errorDisplay.textContent = "All fields are required.";
    return;
  }

  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    e.preventDefault();
    errorDisplay.textContent = "Please enter a valid email address.";
  }
});


document.getElementById("addBtn").addEventListener("click", function () {
  const todoInput = document.getElementById("todoInput");
  const task = todoInput.value.trim();

  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  document.getElementById("todoList").appendChild(li);

  todoInput.value = "";
});
