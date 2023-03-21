import ToDoBody from "./ToDoBody/ToDoBody";
import ToDoFooter from "./ToDoFooter/ToDoFooter";
import "./ToDoList.scss";
import { useSelector } from "react-redux";

const ToDoList = () => {
  const todos = useSelector((state) => state.todoList);
  // constructor() {
  //   super();
  //   this.state = {
  //     taskConstruct: {
  //       id: Number,
  //       task: String,
  //       subtask: String,
  //       completed: false,
  //     },
  //     todos: [],
  //   };
  // }
  // componentDidMount() {
  //   let todoList = JSON.parse(localStorage.getItem("TODO_list"));
  //
  //   if (todoList) {
  //     this.setState({
  //       todos: todoList,
  //     });
  //   }
  // }
  //
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   const todoList = this.state.todos;
  //   localStorage.setItem("TODO_list", JSON.stringify(todoList));
  // }
  // statusUpgrade = (newValue, id) => {
  //   const newTodos = this.state.todos.map((item) => {
  //     if (item.id === id) {
  //       return { ...item, completed: newValue };
  //     } else {
  //       return item;
  //     }
  //   });
  //   this.setState({
  //     todos: newTodos,
  //   });
  // };
  //
  // addNewTask = (text, subtext) => {
  //   // Это топорный способ с созданием нового масива
  //   //
  //   // const newTodos = [...this.state.todos];
  //   // newTodos.push({
  //   //   ...this.state.taskConstruct,
  //   //   id: newTodos.length + 1,
  //   //   task: text,
  //   // });
  //   this.setState({
  //     todos: [...this.state.todos, {...this.state.taskConstruct, id: this.state.todos.length +1, task: text, subtask: subtext }],
  //   });
  // };
  console.log(todos);
  return (
    <div className={`todo`}>
      <h2 className="todo__head">Task List</h2>
      {todos.length !== 0 ? (
        <ToDoBody todos={todos} />
      ) : (
        <h2 className="todo__alert">You didn't add any tasks</h2>
      )}
      {/*<ToDoBody todos={this.state.todos} statusUpgrade={this.statusUpgrade} />*/}
      <ToDoFooter />
    </div>
  );
};

export default ToDoList;