import './style.css';
import TODO from './todo.js';

class TodoList {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.theTodos = document.querySelector('.the-todos');
    this.displayTasks();
  }

  removeTask(taskIndex, liElement) {
    // remove the task from the DOM
    this.contentSpan = liElement.querySelector('span');
    this.parentElement = this.contentSpan.closest('li');
    this.parentElement.remove();

    // remove the task from the local storage
    const index = this.tasks.findIndex((task) => task.index === taskIndex);
    this.tasks.splice(index, 1);
    this.tasks.forEach((task, i) => {
      task.index = i;
    });

    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  editTask(event) {
    this.todoToBeEdited = event.target.closest('.todos');
    this.contentSpan = this.todoToBeEdited.querySelector('span');
    this.inputField = document.createElement('input');
    this.inputField.type = 'text';
    this.inputField.value = this.contentSpan.innerText;
    this.todoToBeEdited.firstElementChild.insertBefore(this.inputField, this.contentSpan);
    this.contentSpan.style.display = 'none';

    this.inputField.addEventListener('keypress', (e) => {
      // If the key pressed is Enter, update the to-do item
      if (e.key === 'Enter') {
        e.preventDefault();
        this.description = this.inputField.value;
        const taskIndex = parseInt(this.contentSpan.getAttribute('task-index'), 10);
        const index = this.tasks.findIndex((task) => task.index === taskIndex);
        if (this.description !== '') {
          this.tasks[index].description = this.description;
          this.tasks[index].editMode = false;
          localStorage.setItem('tasks', JSON.stringify(this.tasks));
          this.displayTasks();
        } else {
          // If the to-do task is empty, display an error message
          document.querySelector('.emptylist').style.display = 'block';
        }
      }
    });
  }

  addTask(newTask) {
    this.tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.displayTasks();
  }

  displayTasks() {
    this.index = this.tasks.length + 1;
    this.theTodos.innerHTML = '';

    this.tasks.forEach((task, i) => {
      this.li = document.createElement('li');
      this.li.classList.add('todos');
      task.index = i + 1;

      this.firstDiv = document.createElement('div');
      this.firstDiv.classList.add('tick-task');

      this.iElement = document.createElement('i');
      this.iElement.classList.add('bi', 'bi-app');

      this.contentSpan = document.createElement('span');
      if (task.editMode) {
        this.inputField = document.createElement('input');
        this.inputField.type = 'text';
        this.inputField.value = task.description;
        this.inputField.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            this.description = this.inputField.value.trim();
            if (this.description !== '') {
              task.description = this.description;
              task.editMode = false;
              localStorage.setItem('tasks', JSON.stringify(this.tasks));
            }
          }
        });
        this.li.appendChild(this.inputField);
        this.inputField.focus();
      } else {
        this.contentSpan.innerText = task.description;
        this.contentSpan.setAttribute('task-index', task.index);
        this.contentSpan.style.display = 'inline-block';
        this.li.appendChild(this.contentSpan);
      }
      this.contentSpan.setAttribute('task-index', task.index);

      this.secondDiv = document.createElement('div');
      this.secondDiv.classList.add('three-dots');

      this.secondElement = document.createElement('i');
      this.secondElement.classList.add('bi', 'bi-three-dots-vertical');

      this.edit = document.createElement('i');
      this.edit.classList.add('bi', 'bi-pencil-square');
      this.edit.style.display = 'none';

      this.trash = document.createElement('i');
      this.trash.classList.add('bi', 'bi-trash');
      this.trash.setAttribute('trash-id', task.index);
      this.trash.style.display = 'none';

      this.secondElement.addEventListener('click', () => {
        if (this.edit.style.display === 'none') {
          this.edit.style.display = 'block';
          this.trash.style.display = 'block';
          this.secondElement.style.display = 'none';
        } else {
          this.edit.style.display = 'none';
          this.trash.style.display = 'none';
          this.secondElement.style.display = 'block';
        }
      });
      this.edit.addEventListener('click', (event) => {
        this.editTask(event);
      });
      this.trash.addEventListener('click', () => {
        const taskIndex = parseInt(this.contentSpan.getAttribute('task-index'), 10);
        this.liElement = this.trash.closest('li');
        this.removeTask(taskIndex, this.liElement);
      });
      this.firstDiv.appendChild(this.iElement);
      this.firstDiv.appendChild(this.contentSpan);
      this.li.appendChild(this.firstDiv);
      this.secondDiv.appendChild(this.secondElement);
      this.secondDiv.appendChild(this.trash);
      this.secondDiv.appendChild(this.edit);
      this.li.appendChild(this.secondDiv);
      this.theTodos.appendChild(this.li);
    });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}

const todolist = new TodoList();

// function to add a new book
const form = document.querySelector('#add-your-list');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = form.todo.value;
  const { index } = todolist.length + 1;
  const completed = false;
  const newTask = new TODO(description, completed, index);
  todolist.addTask(newTask);
  form.reset();
});