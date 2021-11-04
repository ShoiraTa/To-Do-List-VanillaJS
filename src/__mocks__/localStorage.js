/* eslint-disable no-unused-vars */

let tasksArr = [
  {
    description: 'task1',
    completed: false,
    index: 1,
  },
  {
    description: 'task2',
    completed: false,
    index: 2,
  },
];

const createTheLocalStorage = (dataName, data) => {
  tasksArr = [...data];
};

const getDataFromLocalStorage = (dataName) => tasksArr;

export default { createTheLocalStorage, getDataFromLocalStorage };