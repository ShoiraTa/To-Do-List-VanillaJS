const list = document.getElementsByClassName('list');
const updateContent = (newDescription, index) => {
  const taskList = JSON.parse(localStorage.getItem('tasks'));
  taskList.forEach((element, i) => {
    if (i === index) {
      element.description = newDescription;
      localStorage.setItem('tasks', JSON.stringify(taskList));
    }
  });
};
const update = () => {
  for (let i = 0; i < list.length; i += 1) {
    const newContent = list[i];
    list[i].addEventListener('input', () => {
      const editedConent = newContent.textContent;
      updateContent(editedConent, i);
    });
  }
};

export default update;