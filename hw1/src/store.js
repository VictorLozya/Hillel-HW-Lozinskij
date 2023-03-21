import { createStore } from "redux";
import toDoReducer from "./components/Reducer/ToDoReducer";

const store = createStore(toDoReducer);
export default store;
