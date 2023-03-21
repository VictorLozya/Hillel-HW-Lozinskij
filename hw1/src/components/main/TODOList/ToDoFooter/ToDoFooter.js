import React, { useState } from "react";
import "./ToDoFooter.scss";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../Actions/Actions";

const ToDoFooter = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoList);
  const [newUser, editNewUser] = useState({
    title: "",
    id: Number,
    done: false,
  });

  return (
    <div className={`todo__footer`}>
      <label htmlFor="newTask" className={"todo__sub"}>
        Type the task, then press "Enter" key to add new task in To Do list.
      </label>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(action.addNewTask(newUser));
          setTimeout(function () {
            editNewUser({ ...newUser, title: "" });
          });
        }}
        className="todo__input-block"
      >
        <input
          id={`newTask`}
          type="text"
          className={"todo__input"}
          value={newUser.title}
          onChange={(e) => {
            editNewUser({
              ...newUser,
              title: e.target.value,
              id: todos.length + 1,
            });
          }}
          name={"inputValue"}
        />
        <input type={"submit"} className={"todo__button"} value={"GO!"} />
      </form>
    </div>
  );
};

export default ToDoFooter;
