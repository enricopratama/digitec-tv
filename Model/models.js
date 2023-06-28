let data = []; // In-memory data store

const getAllItems = () => {
  return data;
};

const addItem = (item) => {
  data.push(item);
};

module.exports = {
  getAllItems,
  addItem,
};