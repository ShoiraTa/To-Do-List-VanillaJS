import localStorageC from './__mocks__/localStorage';

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
function addToList(newTask) {
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  const toDoTasks = localStorageC.getDataFromLocalStorage('toDoTasks');
  tasks.push(newTask);
  toDoTasks.push(newTask);
  localStorageC.createTheLocalStorage('toDoTasks', toDoTasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return toDoTasks;
}

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

export { tasksArr, addToList, idGenerator };
