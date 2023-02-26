function removeTask(taskIndex, liElement) {
  // remove the task from the DOM
  const contentSpan = liElement.querySelector('span');
  const parentElement = contentSpan.closest('li');
  parentElement.remove();

  // remove the task from the local storage
  const index = tasks.findIndex((task) => task.index === taskIndex);
  tasks.splice(index, 1);
  tasks.forEach((task, i) => {
    task.index = i + 1;
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}