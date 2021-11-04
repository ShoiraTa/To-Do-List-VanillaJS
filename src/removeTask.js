import taskStatus from './taskStatus.js';
import localStorageC from './__mocks__/localStorage';

const deletebtn = document.getElementsByClassName('fa-trash-alt');

function removefromlist(index) {
  if (localStorage.getItem('tasks') != null) {
    const taskList = JSON.parse(localStorage.getItem('tasks'));
    taskList.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }
  taskStatus();

  let toDoTasks = localStorageC.getDataFromLocalStorage('toDoTasks');
  toDoTasks = toDoTasks.filter((task) => task.index !== toDoTasks[index].index);
  console.log(toDoTasks);
  return toDoTasks;
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