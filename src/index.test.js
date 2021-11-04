import { addToList } from './addNewTask.js';
import localStorageController from './__mocks__/localStorage.js';

jest.mock('./localStorage-controller.js');

describe('to do list add and delete', () => {
  test('add a new task', () => {
    const newTask1 = {
      description: 'task3',
      completed: false,
      index: 0,
    };
    const newtask = localStorageController.getDataFromLocalStorage('data');
    addToList(newTask1);
    expect(newtask).toHaveLength(3);
  });

  test('delete task', () => {

  });
});
