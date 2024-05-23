import { useState } from "react"

import TaskContainer from "./components/taskContainer" 
import TaskController from "./components/taskController"

function App() { 
  const [taskList,setTaskList] = useState([]);
  return (
    <>
     <h1 className="app-title">Task Tide</h1> 
     <TaskController addTask={setTaskList} taskList={taskList}/> 
     <TaskContainer taskList={taskList} removeTask={setTaskList}/> 
    </>
  )
}

export default App