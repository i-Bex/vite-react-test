function TaskContainer({ taskList,removeTask }) {
  const newFilteredTaskList = (event) => {
    const filteredTaskList = taskList.filter(task => task.taskId !== parseInt(event.target.dataset.taskReference));
    return filteredTaskList; 
  };

  const taskListElements = taskList.map((task) => {
    return (
      <li key={task.taskId} className="task-container__task">
        <p className="task__description">{task.taskDescription}</p>
        <button type="button" onClick={(event) => removeTask(newFilteredTaskList(event))} data-task-reference={task.taskId}>delete task</button>
      </li>
    );
  });

  return (
    <div>
      <ul className="task-container">{taskListElements}</ul>
    </div>
  );
}

export default TaskContainer;
