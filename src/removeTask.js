import taskStatus from './taskStatus.js';
import domObjects from './domObjects.js';

const deletebtn = document.getElementsByClassName('fa-trash-alt');
function removefromlist(index) {
  const taskList = JSON.parse(localStorage.getItem('tasks'));
  taskList.splice(index, 1);

  localStorage.setItem('tasks', JSON.stringify(taskList));
  domObjects();
  taskStatus();
}

const deleteItem = () => {
  for (let i = 0; i < deletebtn.length; i += 1) {
    deletebtn[i].addEventListener('click', () => {
      removefromlist(i);
      window.location.reload();
    });
  }
};
export { deleteItem, removefromlist };