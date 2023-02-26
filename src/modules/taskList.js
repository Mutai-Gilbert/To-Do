export default class todoList {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.theTodos = document.querySelector('.the-todos');
  }
}