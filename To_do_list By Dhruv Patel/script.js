const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

function addTask() {
  const taskText = todoInput.value.trim();
  if (taskText === "") return;

  const taskItem = document.createElement("li");
  taskItem.className = "todo-item";
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  const deleteButton = taskItem.querySelector(".delete-btn");
  deleteButton.addEventListener("click", () => {
    todoList.removeChild(taskItem);
  });

  todoList.appendChild(taskItem);
  todoInput.value = "";
}

todoInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
