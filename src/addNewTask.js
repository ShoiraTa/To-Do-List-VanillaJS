let tasks = [];

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

const tasksArr = () => {
  const inputFieldValue = inputField.value;
  const newTask = {
    description: inputFieldValue,
    completed: false,
  };
  addToList(newTask);
};

export default tasksArr;