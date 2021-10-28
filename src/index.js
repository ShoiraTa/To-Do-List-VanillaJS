import './style.css';
import domObjects from './domObjects.js';
import taskStatus from './taskStatus.js';
import addNewTask from './addNewTask.js';
import updateContent from './updateContent';
import removeTask from './removeTask';

const clear = document.getElementById('clear');
const inputField = document.getElementById('addTask');
const addTaskbtn = document.getElementById('addTaskbtn');

const displayOnLoad = () => {
  if (localStorage.getItem('tasks') != null) {
    domObjects();
  }
};
displayOnLoad();

addTaskbtn.addEventListener('click', () => {
  addNewTask();
  domObjects();
  taskStatus();
  updateContent();
  removeTask();
  inputField.value = '';
});
inputField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addNewTask();
    domObjects();
    taskStatus();
    updateContent();
    removeTask();
    inputField.value = '';
  }
});

clear.addEventListener('click', () => {
  localStorage.clear();
  domObjects();
});

removeTask();

taskStatus(0);
updateContent();
