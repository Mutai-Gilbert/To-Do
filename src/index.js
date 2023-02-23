import './style.css';

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const theTodos = document.querySelector('.the-todos');

function removeTasks(index) {
  // remove the task from the dom
  const todoToBeDeleted = document.querySelector(`.todos[task-index='${index}']`);
  const parentElement = todoToBeDeleted.parentNode;
  parentElement.removeChild(todoToBeDeleted);
  // remove the task from the local storage

  const taskIndex = tasks.findIndex((task) => task.index === index);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
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

    const trash = document.createElement('i');
    trash.classList.add('bi', 'bi-trash');
    trash.style.display = 'none';

    secondElement.addEventListener('click', () => {
      trash.style.display = 'block';
      secondElement.style.display = 'none';
      trash.addEventListener('click', () => {
        const index = parseInt(li.getAttribute('task-index'), 10);
        removeTasks(index);
      });
    });
    firstDiv.appendChild(iElement);
    firstDiv.appendChild(contentSpan);
    li.appendChild(firstDiv);
    secondDiv.appendChild(secondElement);
    secondDiv.appendChild(trash);
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