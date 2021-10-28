import './style.css';
import domObjects from './domObjects.js';
import taskStatus from './taskStatus.js';
import addNewTask from './addNewTask.js';
import updateContent from './updateContent.js';
import removeTask from './removeTask.js';
import clearCompleted from './clearCompleted.js';

const inputField = document.getElementById('addTask');
const addTaskbtn = document.getElementById('addTaskbtn');
removeTask();
const displayOnLoad = () => {
  if (localStorage.getItem('tasks') != null) {
    domObjects();
  }
};
displayOnLoad();

const execute = () => {
  addNewTask();
  domObjects();
  taskStatus();
  updateContent();
  removeTask();
  inputField.value = '';
};

addTaskbtn.addEventListener('click', () => {
  execute();
});
inputField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    execute();
  }
});

const idGenerator = () => {
  const taskList = JSON.parse(localStorage.getItem('tasks'));
  taskList.forEach((item, i) => {
    i += 1;
    item.index = i;
    localStorage.setItem('tasks', JSON.stringify(taskList));
    console.log('here', localStorage);
  });
};

idGenerator();

removeTask();
taskStatus(0);
updateContent();
clearCompleted();