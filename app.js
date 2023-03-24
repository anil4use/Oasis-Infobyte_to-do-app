
    let taskList = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskListEl = document.getElementById("taskList");
  
  if (taskInput.value !== '') {
    taskList.push(taskInput.value);
    taskListEl.innerHTML += `<li>${taskInput.value} <button onclick="removeTask(${taskList.length - 1})">x</button></li>`;
    taskInput.value = '';
  }
}

function removeTask(index) {
  taskList.splice(index, 1);
  const taskListEl = document.getElementById("taskList");
  taskListEl.innerHTML = '';
  taskList.forEach((task, index) => {
    taskListEl.innerHTML += `<li>${task} <button onclick="removeTask(${index})">x</button></li>`;
  });
}
