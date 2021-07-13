import './App.css';

const TodoList = (props: any) => {
  return (
    <div className="App__todo-container--main">
      {props.newToDo.length > 0 && (
        <div className="Card" style={{ backgroundColor: "yellow" }}>
          {props.newToDo}
        </div>
      )}
      {props.isLoading ? (
        <div>Loading...</div>
      ) : (
        props.todos.map((item: any, index: number) => {
          return <div key={index} className="Card">{item}</div>;
        })
      )}
    </div>
  );
};

export default TodoList;
