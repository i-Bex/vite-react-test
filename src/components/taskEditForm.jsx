import { useState } from "react";

function TaskEditForm({taskId,taskList,hideForm,setTaskList}){

  const editTask = (event) => {
  event.preventDefault();
  if(editTaskText.length <= 0 || editTaskText.trim() === "")return;
   const newEditedTaskList = taskList.map(task => {
    if(task.taskId === taskId){
       task.taskDescription = editTaskText;
    }
    return task;
   }); 
   setTaskList(newEditedTaskList);
   setEditTaskText("");
  }

  const [editTaskText,setEditTaskText] = useState("");

    return (
        <form hidden={hideForm} onSubmit={editTask}>
            <input type="text" value={editTaskText} id={`edit-task-${taskId}`} onInput={(event) => setEditTaskText(event.target.value)}/>
            <button type="submit">confirm</button>
        </form>
    )

}

export default TaskEditForm; 