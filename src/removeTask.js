import taskStatus from './taskStatus.js';
import domObjects from './domObjects.js';

function removefromlist(index) {
  const taskList = JSON.parse(localStorage.getItem('tasks'));
  taskList.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(taskList));
  domObjects();
  taskStatus();
}

const deleteItem = () => {
  const deletebtn = document.getElementsByClassName('fa-trash-alt');
  for (let i = 0; i < deletebtn.length; i += 1) {
    deletebtn[i].addEventListener('click', () => {
      removefromlist(i);
    });
  }
};
export default deleteItem;