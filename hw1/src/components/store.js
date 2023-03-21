import { createStore } from "redux";
import toDoReducer from "./Reducer/ToDoReducer";

const store = createStore(toDoReducer);
export default store;
