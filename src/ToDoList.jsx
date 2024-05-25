import React, {useState} from 'react'

export default function ToDoList(){
  const [tasks, setTasks] = useState(["Walk my dog", "Wash my clothes", "Dine out", "Do work"])
  const [newTasks, setNewTasks] = useState("")
  
  function handleInputChange(event){
    setNewTasks(event.target.value)
  }

  function addTasks(){
    if(newTasks.trim() !== ""){
      setTasks(t => [...t, newTasks])
      setNewTasks("")
    }
  }

  function deleteTasks(index){
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  function moveTasksUp(index){
    if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }

  function moveTasksDown(index){
    if(index < tasks.length - 1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }

  return(
  <div className="to-do-list">
    <h2>To Do List</h2>
    <div>
      <input onChange={handleInputChange} className="input" type="text" value={newTasks} placeholder="Enter a task..."></input>
      <button className="add-button" onClick={addTasks}>Add</button>
    </div>
    <ol>
      {tasks.map((task, index) => 
      <li key={index}>
        <span className="buttons">{task}</span>
        <button className="delete-button" onClick={() => deleteTasks(index)}>Detele</button>
        <button className="move-button-up" onClick={() => moveTasksUp(index)}>⬆️</button>
        <button className="move-button-down" onClick={() => moveTasksDown(index)}>⬇️</button>
      </li>
      )}
    </ol>
  </div>)
}


//input, add, delete, up, down