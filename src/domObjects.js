const tasksUl = document.getElementById('tasks');
const outputTasks = () => {
  const taskList = JSON.parse(localStorage.getItem('tasks'));
  const taskDiv = document.createElement('div');
  const checkBox = document.createElement('input');
  const deletedItem = document.createElement('s');

  taskDiv.className = 'd-flex';
  tasksUl.innerHTML = '';
  checkBox.type = 'checkbox';
  checkBox.className = 'checkbox';
  taskList.forEach((task) => {
    if (task.completed) {
      checkBox.setAttribute('checked', 'checked');
      // tasksUl.appendChild(deletedItem);
    } else {
      checkBox.removeAttribute('checked', 'checked');
      // if (tasksUl.hasChildNodes(deletedItem)) {
      //   tasksUl.removeChild(deletedItem);
      // }
    }

    // li.appendChild(checkBox);
    // li.setAttribute('contenteditable', 'contenteditable');
    // li.className = 'list';
    // tasksUl.appendChild(li);
    // li.innerHTML = `${task.description} <i class="fas fa-trash-alt"></i>`;

    tasksUl.appendChild(deletedItem);
    tasksUl.appendChild(taskDiv);
    tasksUl.appendChild(checkBox);
    tasksUl.innerHTML += ` <li contenteditable class= "list" > ${task.description}  <i class="fas fa-trash-alt"></i> </li>`;
  });
};

export default outputTasks;