import './style.css';

const tasks = [
  {
    description: 'Read the bible',
    completed: true,
    index: 0,
  },
  {
    description: 'Read a book',
    completed: true,
    index: 1,
  },
  {
    description: 'Attend Microverse',
    completed: true,
    index: 2,
  },
  {
    description: 'Read MDN documentation',
    completed: true,
    index: 3,
  },
];

function displayTasks() {
  const theTodos = document.querySelector('.the-todos');
  theTodos.innerHTML = '';
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <li class="todos">
    <div>
        <i class="bi bi-app"></i>
        <span> ${task.description}</span>
    </div>
    <div class="three-dots">
        <i class="bi bi-three-dots-vertical"></i>
    </div>

</li>
      `;
    theTodos.appendChild(li);
  });
}
displayTasks();