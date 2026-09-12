const config = {
  baseURL: process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com',
  todoPath: process.env.API_TODO_PATH || '/todos/1',
};

module.exports = { config };