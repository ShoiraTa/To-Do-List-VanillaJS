import domObjects from './domObjects.js';

const clear = document.getElementById('clear');
const clearCompleted = () => {
  clear.addEventListener('click', () => {
    let taskList = JSON.parse(localStorage.getItem('tasks'));
    taskList = taskList.filter((el) => el.completed === false);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    domObjects();
    window.location.reload();
  });
};

export default clearCompleted;
