import './style.css';
import taskStatus from './taskStatus';

const tasksUl = document.getElementById('tasks');
const inputField = document.getElementById('addTask');
const clear = document.getElementById('clear');
const checkbox = document.getElementsByClassName('checkbox');

let tasks = [];
taskStatus();

const outputTasks = () => {
  const taskList = JSON.parse(localStorage.getItem('tasks'));
  tasksUl.innerHTML = '';
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.className = 'checkbox';

  taskList.forEach((task, index) => {
    tasksUl.appendChild(checkBox);
    tasksUl.innerHTML += `<li> ${task.description}</li>`;
  });
};

const displayOnLoad = () => {
  if (localStorage.getItem('tasks') != null) {
    outputTasks();
  }
};
displayOnLoad();

function updateCheckboxStatus(status, index) {
  const taskList = JSON.parse(localStorage.getItem('tasks'));
  if (status) {
    taskList.forEach((item, i) => {
      if (i === index) {
        item.completed = true;
        localStorage.setItem('tasks', JSON.stringify(taskList));
        console.log('correct', localStorage);
      }
    });
  } else {
    taskList.forEach((item, i) => {
      if (i === index) {
        item.completed = false;
        localStorage.setItem('tasks', JSON.stringify(taskList));
        console.log('false', localStorage);
      }
    });
  }
}

const addToList = (newTask) => {
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const tasksArr = () => {
  const inputFieldValue = inputField.value;
  const newTask = {
    description: inputFieldValue,
    completed: false,
  };
  addToList(newTask);
};

for (let i = 0; i < checkbox.length; i += 1) {
  checkbox[i].addEventListener('click', () => {
    const { checked } = checkbox[i];
    if (checked) {
      updateCheckboxStatus(true, i);
    } else {
      updateCheckboxStatus(false, i);
    }
  });
}

inputField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    tasksArr();
    outputTasks();
  }
});

clear.addEventListener('click', () => {
  localStorage.clear();
  outputTasks();
});
updateCheckboxStatus(0);
