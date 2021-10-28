let tasks = [];

function idGenerator() {
  const taskList = JSON.parse(localStorage.getItem('tasks'));
  taskList.forEach((item, i) => {
    i += 1;
    item.index = i;
    localStorage.setItem('tasks', JSON.stringify(taskList));
  });
}

const inputField = document.getElementById('addTask');
const addToList = (newTask) => {
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

function tasksArr() {
  const inputFieldValue = inputField.value;
  const newTask = {
    description: inputFieldValue,
    completed: false,
    index: 0,
  };
  addToList(newTask);
  idGenerator();
}

export { tasksArr, idGenerator };
