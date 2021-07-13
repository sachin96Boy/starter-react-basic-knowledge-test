import React, { useState } from "react";
const ToDoForm = (props: any) => {
//   const [newToDo, setNewToDo] = useState<string>("");

  const fileSubmit = () => {
    // props.Onsubmitted({ task: newToDo });
    // props.setNewToDo(newToDo);
    // props.setTest(newToDo)
    // props.setTodos([newToDo,...props.todo]);
    // console.log(newToDo)
    // props.Onsubmitted(newToDo);
    // console.log(...props.todos);
    props.setTodos([props.newToDo, ...props.todos]);
    // props.setNewToDo("");
  };
  return (
    <div className="App__todo-container--top">
      <input
        type="text"
        className="App__todo-container--top-input"
        onChange={(e) => props.setNewToDo(e.target.value)}
        value={props.newToDo}
      />
      <button className="App__todo-container--top-button" onClick={()=>{fileSubmit()}}>
        ADD
      </button>
    </div>
  );
};

export default ToDoForm;
