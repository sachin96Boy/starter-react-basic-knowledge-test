import React,{useState} from 'react';
const ToDoForm = (props:any)=>{
  const [todos, setTodos] = useState<string[]>([]);
  const [newToDo, setNewToDo] = useState<string>("");

  const fileSubmit = ()=>{
      props.Onsubmitted({task:newToDo});
  }
    return(
        <div className="App__todo-container--top">
            <input
                type="text"
                className="App__todo-container--top-input"
                onChange={(e) => setNewToDo(e.target.value)}
                value={newToDo}
            /> 
            <button
                className="App__todo-container--top-button"
                onClick={fileSubmit
                }
            >
            ADD
            </button>
        </div>
      
    );
}

export default ToDoForm;