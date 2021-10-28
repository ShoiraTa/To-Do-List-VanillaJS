import './style.css';
import domObjects from './domObjects.js';
import taskStatus from './taskStatus.js';
import addNewTask from './addNewTask.js';
import updateContent from './updateContent.js';
import removeTask from './removeTask.js';

const clear = document.getElementById('clear');
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

clear.addEventListener('click', () => {
  localStorage.clear();
  domObjects();
});

removeTask();
taskStatus(0);
updateContent();
