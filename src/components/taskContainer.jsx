import { useState } from "react";

import TaskEditForm from "./taskEditForm";

function Task({ taskId, taskDescription,taskComplete,taskList,setTaskList}) {

  const removeTask = () => {
    const filteredTaskList = taskList.filter((task) => task.taskId !== taskId);
    setTaskList(filteredTaskList);
  };

  const completeTask = (event) => {
    const taskListCompleted = taskList.map(task => {
      if(task.taskId === taskId){
        task.taskComplete = event.target.checked; 
      }
      return task
    });
    setTaskList(taskListCompleted);
  }

  const toggleForm = () => {
    setHideForm(!hideForm);
  };

  const [hideForm, setHideForm] = useState(true);

  return (
    <>
      <div className="task-container__task__head">
        <input
          type="checkbox"
          id={taskId}
          checked={taskComplete}
          onChange={(event) => completeTask(event)}
        />
        <p
          style={
            taskComplete
              ? { textDecoration: "line-through", color: "rgb(220, 220, 220)" }
              : {}
          }
        >
          {taskDescription}
        </p>
      </div>

      <div>
        <button type="button" onClick={removeTask}>
          delete task
        </button>
        <button type="button" onClick={toggleForm}>
          edit task
        </button>
      </div>

      <TaskEditForm
        taskId={taskId}
        taskList={taskList}
        hideForm={hideForm}
        setTaskList={setTaskList}
      />
    </>
  );
}

function TaskContainer({ taskList, setTaskList}) {
  const taskListElements = taskList.map((task) => {
    return (
      <li key={task.taskId} className="task-container__task">
        <Task
          taskId={task.taskId}
          taskDescription={task.taskDescription}
          taskComplete={task.taskComplete}
          taskList={taskList}
          setTaskList={setTaskList}
        />
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
