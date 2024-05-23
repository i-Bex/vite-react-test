import { useState } from "react";

function TaskController({ taskList,addTask }) {
  const [taskId, setTaskId] = useState(0);
  const [taskDescription, setTaskDescription] = useState("");

  const updateTaskDescription = (event) => {
    setTaskDescription(event.target.value);
  };

  const createTask = (event) => {
    event.preventDefault(); 

    if(taskDescription.length <= 0 && taskDescription === "")return;
    addTask([...taskList,{taskId,taskDescription}]);
    setTaskId(taskId  + 1);

    setTaskDescription("");
    document.getElementById("task-input").value = "";
  };

  return (
    <form onSubmit={createTask}>
      <input
        id="task-input"
        type="text"
        placeholder="task description"
        aria-label="task info"
        onInput={(event) => updateTaskDescription(event)}
      />
      <button type="submit" id="submit-task-btn">create task</button>
    </form>
  );
}

export default TaskController;
