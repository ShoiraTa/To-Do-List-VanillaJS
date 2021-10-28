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
  const taskDiv = document.createElement('div');
  const checkBox = document.createElement('input');

  taskDiv.className = 'd-flex';
  tasksUl.innerHTML = '';
  checkBox.type = 'checkbox';
  checkBox.className = 'checkbox';
  taskList.forEach((task, index) => {
    if (task.completed) {
      checkBox.setAttribute('checked', 'checked');
    } else {
      checkBox.removeAttribute('checked', 'checked');
    }
    tasksUl.appendChild(taskDiv);
    tasksUl.appendChild(checkBox);
    tasksUl.innerHTML += task.completed ? `<li> ${task.description} </li>` : `<li>${task.description}</li>`;
  });
};

const displayOnLoad = () => {
  if (localStorage.getItem('tasks') != null) {
    outputTasks();
  }
};
displayOnLoad();

function updateCompletedInStorage(status, index) {
  const taskList = JSON.parse(localStorage.getItem('tasks'));
  if (!status) {
    taskList.forEach((item, i) => {
      if (i === index) {
        item.completed = false;
        localStorage.setItem('tasks', JSON.stringify(taskList));
        console.log('false', localStorage);
      }
    });
  } else {
    taskList.forEach((item, i) => {
      if (i === index) {
        item.completed = true;
        console.log('correct', localStorage, index);
        localStorage.setItem('tasks', JSON.stringify(taskList));
      }
    });
  }
}

for (let i = 0; i < checkbox.length; i += 1) {
  checkbox[i].addEventListener('click', () => {
    const { checked } = checkbox[i];
    if (checked) {
      updateCompletedInStorage(true, i);
    } else {
      updateCompletedInStorage(false, i);
    }
  });
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
updateCompletedInStorage(0);