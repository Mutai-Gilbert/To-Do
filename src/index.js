import './style.css';

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const theTodos = document.querySelector('.the-todos');

function removeTasks() {
  // remove the task from the dom
  

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

    const secondDiv = document.createElement('div');
    secondDiv.classList.add('three-dots');

    const secondElement = document.createElement('i');
    secondElement.classList.add('bi', 'bi-three-dots-vertical');
    firstDiv.appendChild(iElement);
    firstDiv.appendChild(contentSpan);
    li.appendChild(firstDiv);
    secondDiv.appendChild(secondElement);
    li.appendChild(secondDiv);
    theTodos.appendChild(li);
  });
}

// function to add a new book
const form = document.querySelector('#add-your-list');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = form.todo.value;
  tasks.push({ description });
  displayTasks();
});