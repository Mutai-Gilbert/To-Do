import './style.css';

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const theTodos = document.querySelector('.the-todos');

function removeTask(taskIndex, liElement) {
  // remove the task from the DOM
  const contentSpan = liElement.querySelector('span');
  const parentElement = contentSpan.closest('li');
  parentElement.remove();

  // remove the task from the local storage
  const index = tasks.findIndex((task) => task.index === taskIndex);
  tasks.splice(index, 1);
  tasks.forEach((task, i) => {
    task.index = i;
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function editTask(event, displayTasks) {
  const todoToBeEdited = event.target.closest('.todos');
  const contentSpan = todoToBeEdited.querySelector('span');
  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.value = contentSpan.innerText;
  todoToBeEdited.firstElementChild.insertBefore(inputField, contentSpan);
  contentSpan.style.display = 'none';

  inputField.addEventListener('keypress', (e) => {
    // If the key pressed is Enter, update the to-do item
    if (e.key === 'Enter') {
      e.preventDefault();
      const description = inputField.value;
      const taskIndex = parseInt(contentSpan.getAttribute('task-index'), 10);
      const index = tasks.findIndex((task) => task.index === taskIndex);
      if (description !== '') {
        tasks[index].description = description;
        tasks[index].editMode = false;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
      } else {
        // If the to-do task is empty, display an error message
        document.querySelector('.emptylist').style.display = 'block';
      }
    }
  });
}

function displayTasks() {
  theTodos.innerHTML = '';

  tasks.forEach((task, i) => {
    const li = document.createElement('li');
    li.classList.add('todos');
    task.index = i + 1;

    const firstDiv = document.createElement('div');
    firstDiv.classList.add('tick-task');

    const iElement = document.createElement('i');
    iElement.classList.add('bi', 'bi-app');

    const contentSpan = document.createElement('span');
    if (task.editMode) {
      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.value = task.description;
      inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const description = inputField.value.trim();
          if (description !== '') {
            task.description = description;
            task.editMode = false;
            localStorage.setItem('tasks', JSON.stringify(tasks));
          }
        }
      });
      li.appendChild(inputField);
      inputField.focus();
    } else {
      contentSpan.innerText = task.description;
      contentSpan.setAttribute('task-index', task.index);
      contentSpan.style.display = 'inline-block';
      li.appendChild(contentSpan);
    }
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
    trash.setAttribute('trash-id', task.index);
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
      editTask(event, displayTasks);
    });
    trash.addEventListener('click', () => {
      const taskIndex = parseInt(contentSpan.getAttribute('task-index'), 10);
      const liElement = trash.closest('li');
      removeTask(taskIndex, liElement);
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
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
displayTasks();
// function to add a new book
const form = document.querySelector('#add-your-list');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = form.todo.value;
  const index = tasks.length + 1;
  const completed = false;
  tasks.push({ description, index, completed });
  displayTasks();
  form.reset();
});