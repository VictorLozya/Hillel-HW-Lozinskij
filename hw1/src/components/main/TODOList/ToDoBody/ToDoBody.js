import ListItem from "./ListItem/ListItem";
import "./ToDoBody.scss";

const ToDoBody = ({ todos }) => {
  return (
    <div className={`todo__body`}>
      <ul className="todo__list">
        {todos.map((item) => {
          return <ListItem key={item.id} item={item} id={item.id} />;
        })}
      </ul>
    </div>
  );
};

export default ToDoBody;
