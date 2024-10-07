document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  const tasks = [];

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskDescription = document.getElementById("new-task-description").value;
    const priority = document.getElementById("priority").value;
    const dueDate = document.getElementById("due-date").value;

    if (taskDescription !== "") {
      addTask(taskDescription, priority, dueDate);
    }

    e.target.reset();
  });

  function addTask(description, priority, dueDate) {
    const task = { description, priority, dueDate };
    tasks.push(task);
    tasks.sort((a, b) => priorityValue(b.priority) - priorityValue(a.priority));
    renderTasks();
  }

  function priorityValue(priority) {
    if (priority === "high") return 3;
    if (priority === "medium") return 2;
    return 1;
  }

  function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = `${task.description} - Due: ${task.dueDate}`;
      li.style.color = task.priority === "high" ? "red" : task.priority === "medium" ? "yellow" : "green";

      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.addEventListener("click", () => editTask(li, task));

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => deleteTask(task));

      li.appendChild(editBtn);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  }

  function deleteTask(taskToDelete) {
    const index = tasks.findIndex(task => task.description === taskToDelete.description);
    if (index > -1) {
      tasks.splice(index, 1);
      renderTasks();
    }
  }

  function editTask(taskItem, task) {
    const newDescription = prompt("Edit task:", task.description);
    if (newDescription) {
      task.description = newDescription;
      renderTasks();
    }
  }
});
