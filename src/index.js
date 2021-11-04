import './style.css';
import domObjects from './domObjects.js';
import taskStatus from './taskStatus.js';
import updateContent from './updateContent.js';
import { deleteItem } from './removeTask.js';
import clearCompleted from './clearCompleted.js';

const addNewTask = require('./addNewTask.js');

const inputField = document.getElementById('addTask');
const addTaskbtn = document.getElementById('addTaskbtn');

deleteItem();
const displayOnLoad = () => {
  if (localStorage.getItem('tasks') != null) {
    domObjects();
  }
};
displayOnLoad();

const execute = () => {
  addNewTask.tasksArr();
  domObjects();
  taskStatus();
  updateContent();
  deleteItem();
  inputField.value = '';
};

addTaskbtn.addEventListener('click', () => {
  execute();
});

addNewTask.idGenerator();
deleteItem();
taskStatus(0);
updateContent();
clearCompleted();