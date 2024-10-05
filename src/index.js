document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementsById('tasks');
  
  form .addEventListener('submit', function(e) {
    e.preventDefault(); /*this is to orevent the page from reloading*/

    const taskDescription = document.getElementById('new-task-description').value;
    if (taskDescription !== "") {
      addTask(taskDescription)
    }

    e.target.reset()
  });
});

function addTask(description) {
  const taskList = document.getElementById('tasks');

  const li = document.createElement('li');
  li.textContent = description;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', deleteTask);
  li.appendChild(deleteButton);
  taskList.appendChild(li);
}

function deleteTask(e) {
  e.target.parentElement.remove();
}

function addTask(description) {
  const taskList = document.getElementById('tasks');
  const priority = document.getElementById('priority').value;
  const li = document.createElement('li');
  li.textContent = description;

  if (priority === 'high') {
    li.style.color = 'red';
  } else if (priority === 'medium') {
    li.style.color = 'yellow';
  } else {
    li.style.color = 'green';
  }
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener('click', deleteTask);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
}

function addTask(description) {
  const priority = document.getElementById('priority').value;
  const task = { description, priority };
  tasks.push(task);
  tasks.sort((a, b) => priorityValue(b.priority) - priorityValue(a.priority));
  renderTasks();
}

function priorityValue(priority) {
  if (priority === 'high') return 3;
  if (priority === 'medium') return 2;
  return 1;
}

function renderTasks() {
  const taskList = document.getElementById('tasks');
  taskList.innerHTML = ''; 

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.description;
    li.style.color = task.priority === 'high' ? 'red' : task.priority === 'medium' ? 'yellow' : 'green';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', deleteTask);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

function addTask(description) {
  const taskList = document.getElementById('tasks');
  const li = document.createElement('li');
  li.textContent = description;

  const editBtn = document.createElement('button');
  editBtn.textContent = "Edit";
  editBtn.addEventListener('click', () => editTask(li, description));

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener('click', deleteTask);

  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

function editTask(taskItem, oldDescription) {
  const newDescription = prompt("Edit task:", oldDescription);
  if (newDescription) {
    taskItem.firstChild.textContent = newDescription;
  }
}

const dueDate = document.getElementById('due-date').value;
li.textContent = `${description} - Due: ${dueDate}`;
















