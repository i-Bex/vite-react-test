import { useState,useEffect } from "react"

import TaskContainer from "./components/taskContainer" 
import TaskController from "./components/taskController"

function App() { 
  const saveTaskList = JSON.parse(localStorage.getItem("taskListLocal")) || [];
  const [taskList,setTaskList] = useState(saveTaskList);
  
  useEffect(() => {
    localStorage.setItem("taskListLocal",JSON.stringify(taskList));
  },[taskList]);

  return (
    <>
     <h1 className="app-title">Task Tide</h1> 
     <TaskController taskList={taskList} setTaskList={setTaskList}/> 
     <TaskContainer taskList={taskList} setTaskList={setTaskList}/> 
    </>
  )
}

export default App