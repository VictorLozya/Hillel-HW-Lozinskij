import ToDoBody from "./ToDoBody/ToDoBody";
import ToDoFooter from "./ToDoFooter/ToDoFooter";
import "./ToDoList.scss";
import { useSelector } from "react-redux";

const ToDoList = () => {
  const todos = useSelector((state) => state.todoList);
  return (
    <div className={`todo`}>
      <h2 className="todo__head">Task List</h2>
      {todos.length !== 0 ? (
        <ToDoBody todos={todos} />
      ) : (
        <h2 className="todo__alert">You didn't add any tasks</h2>
      )}
      <ToDoFooter />
    </div>
  );
};

export default ToDoList;
