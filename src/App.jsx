import { useState } from "react"

import TaskContainer from "./components/taskContainer" 
import TaskController from "./components/taskController"

function App() { 
  const [taskList,setTaskList] = useState([]);
  return (
    <>
     <h1 className="app-title">Task Tide</h1> 
     <TaskController taskList={taskList} setTaskList={setTaskList}/> 
     <TaskContainer taskList={taskList} setTaskList={setTaskList}/> 
    </>
  )
}

export default App