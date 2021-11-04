const createTheLocalStorage = (dataName, data) => {
  const strdata = JSON.stringify(data);
  localStorage.setItem(dataName, strdata);
};

const getDataFromLocalStorage = (dataName) => {
  if (localStorage.getItem(dataName) == null) {
    return null;
  }
  return JSON.parse(localStorage.getItem(dataName));
};

export default { createTheLocalStorage, getDataFromLocalStorage };