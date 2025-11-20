import React, {useState} from 'react'

function ToDoList(){
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event){
     setNewTask(event.target.value);
  } 
  function addTask(index){
     setTask(t => [...t, newTask]);
     setNewTask("");
  }
  function deleteTask (index){
    setTask(task.filter((_, i) => i !== index));
  }
  function moveUpTask(index){
     if(index > 0){
       const updatedTask = [...task];
       [updatedTask[index], updatedTask[index - 1]] =
       [updatedTask[index - 1], updatedTask[index]]
        setTask(updatedTask);
      }
  }
  function moveDownTask(index){
     if(index < task.length - 1){
       const updatedTask = [...task];
       [updatedTask[index], updatedTask[index + 1]] = 
       [updatedTask[index + 1], updatedTask[index]]
       setTask(updatedTask);
     }
  }
  return (
     <div className="to-do-list">
        <h2>To-Do-List</h2>
        <input type="text" value={newTask} onChange={handleInputChange} 
           placeholder='Enter the Task....'></input>
           <button onClick={addTask}>Add</button>
           <div className="task">
            <ol>
              {task.map((tasks, index)=> 
               <li className="List-item" key={index}>
                <span>{tasks}</span>
                <button id="Delete-button" onClick={() => deleteTask(index)}>❌</button>
                <button id="MoveUp-Button" onClick={() => moveUpTask(index)}>👆</button>
                <button id="MoveDown-Button" onClick={() => moveDownTask(index)}>👇</button>
               </li>
              )}
            </ol>
           </div>
     </div>
  );
}
export default ToDoList