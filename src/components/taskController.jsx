import { useState } from "react";

function TaskController({ taskList,setTaskList }) {
  const [taskId, setTaskId] = useState((parseInt(taskList[taskList.length -1]?.taskId) + 1) || 0);
  const [taskDescription, setTaskDescription] = useState("");

  const updateTaskDescription = (event) => {
    setTaskDescription(event.target.value);
  };

  const createTask = (event) => {
    event.preventDefault(); 

    if(taskDescription.length <= 0 || taskDescription.trim() === "")return;
    setTaskList([...taskList,{taskId,taskDescription,taskComplete:false}]);
    setTaskId(taskId  + 1);
    setTaskDescription(""); 
  };

  return (
    <form onSubmit={createTask}>
      <input
        id="task-input"
        type="text"
        placeholder="task description"
        aria-label="task info"
        value={taskDescription}
        onInput={(event) => updateTaskDescription(event)}
      />
      <button type="submit" id="submit-task-btn">create task</button>
    </form>
  );
}

export default TaskController;
