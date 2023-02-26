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