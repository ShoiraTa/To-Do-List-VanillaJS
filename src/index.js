import './style.css';
import List from './list.js';

const tasks = new List();
// tasks.addActivity('Come Home');

document.querySelector('#add-task').addEventListener('submit', (e) => {
  e.preventDefault();
  const activity = e.target.elements.activity.value;
  tasks.addActivity(activity);
  e.target.reset();
});
// tasks.display();
document.querySelector('#delete-all').addEventListener('click', () => {
  tasks.deleteAll();
});

// clear completed
document.querySelector('.clear-completed').addEventListener('click', () => {
  tasks.clearCompleted();
});