import './style.css';

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const theTodos = document.querySelector('.the-todos');

function removeTasks() {
  // remove the task from the dom
  const todoToBeDeleted = document.querySelector('.todos');
  const parentElement = todoToBeDeleted.parentNode;
  parentElement.removeChild(todoToBeDeleted);
  // remove the task from the local storage

  const idTask = todoToBeDeleted.getAttribute('task-index');
  const parseId = parseInt(idTask, 10);
  const index = tasks.findIndex((task) => task.index === parseId);
  tasks.splice(index, 1);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}
function editTask(event) {
  const todoToBeEdited = event.target.closest('.todos');
  const contentSpan = todoToBeEdited.querySelector('span');
  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.value = contentSpan.innerText;
  todoToBeEdited.firstElementChild.insertBefore(inputField, contentSpan);
  contentSpan.style.display = 'none';

  inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const idTask = todoToBeEdited.getAttribute('task-index');
      const index = tasks.findIndex((task) => task.index === parseInt(idTask, 10));
      if (index !== -1) {
        tasks[index].description = inputField.value;
        contentSpan.innerText = inputField.value;
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
      inputField.parentNode.removeChild(inputField);
      contentSpan.style.display = 'inline';
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  });
}

function displayTasks() {
  theTodos.innerHTML = '';
  localStorage.setItem('tasks', JSON.stringify(tasks));

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.classList.add('todos');

    const firstDiv = document.createElement('div');

    const iElement = document.createElement('i');
    iElement.classList.add('bi', 'bi-app');

    const contentSpan = document.createElement('span');
    contentSpan.innerText = task.description;
    contentSpan.setAttribute('task-index', task.index);

    const secondDiv = document.createElement('div');
    secondDiv.classList.add('three-dots');

    const secondElement = document.createElement('i');
    secondElement.classList.add('bi', 'bi-three-dots-vertical');

    const edit = document.createElement('i');
    edit.classList.add('bi', 'bi-pencil-square');
    edit.style.display = 'none';

    const trash = document.createElement('i');
    trash.classList.add('bi', 'bi-trash');
    trash.style.display = 'none';

    secondElement.addEventListener('click', () => {
      if (edit.style.display === 'none') {
        edit.style.display = 'block';
        trash.style.display = 'block';
        secondElement.style.display = 'none';
      } else {
        edit.style.display = 'none';
        trash.style.display = 'none';
        secondElement.style.display = 'block';
      }
    });
    edit.addEventListener('click', (event) => {
      editTask(event);
    });
    trash.addEventListener('click', (event) => {
      removeTasks(event);
    });
    firstDiv.appendChild(iElement);
    firstDiv.appendChild(contentSpan);
    li.appendChild(firstDiv);
    secondDiv.appendChild(secondElement);
    secondDiv.appendChild(trash);
    secondDiv.appendChild(edit);
    li.appendChild(secondDiv);
    theTodos.appendChild(li);
  });
}

// function to add a new book
const form = document.querySelector('#add-your-list');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = form.todo.value;
  const index = tasks.length;
  tasks.push({ description, index });
  displayTasks();
  form.reset();
});