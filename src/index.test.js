import { addToList } from './addNewTask.js';
import { removefromlist } from './removeTask.js';
import localStorageController from './__mocks__/localStorage.js';

jest.mock('./localStorage-controller.js');

describe('to do list add and delete', () => {
  const newTask1 = {
    description: 'task3',
    completed: false,
    index: 0,
  };
  const newtask = localStorageController.getDataFromLocalStorage('data');
  test('add a new task', () => {
    addToList(newTask1);
    expect(newtask).toHaveLength(3);
  });

  test('delete task', () => {
    removefromlist(1);
    expect(newtask).toHaveLength(2);
  });
});
