import { addToList } from './addNewTask.js';
import { removefromlist } from './removeTask.js';
import localStorageController from './__mocks__/localStorage.js';

jest.mock('./localStorage-controller.js');

describe('to do list add and delete', () => {
  test('delete a task', () => {
    expect(removefromlist(0)).toHaveLength(1);
  });

  test('add a new task', () => {
    const newtask = localStorageController.getDataFromLocalStorage('data');
    const newTask1 = {
      description: 'task 3',
      completed: false,
      index: 0,
    };
    addToList(newTask1);
    expect(newtask).toHaveLength(3);
  });
});
