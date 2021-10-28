import './style.css';
import domObjects from './domObjects.js';
import taskStatus from './taskStatus.js';
import addNewTask from './addNewTask.js';

const clear = document.getElementById('clear');
const inputField = document.getElementById('addTask');

const displayOnLoad = () => {
  if (localStorage.getItem('tasks') != null) {
    domObjects();
  }
};
displayOnLoad();

inputField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addNewTask();
    domObjects();
    taskStatus();
  }
});

clear.addEventListener('click', () => {
  localStorage.clear();
  domObjects();
});
taskStatus(0);