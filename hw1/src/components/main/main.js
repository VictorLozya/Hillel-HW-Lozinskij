import Nav from "../nav/nav";
import "./main.scss";
import ToDoList from "./TODOList/ToDoList";
import store from "../store";
const Main = () => {
  console.log(store.getState());
  return (
    <div className={"container"}>
      <div className={"wrapper"}>
        <Nav />
        <section className={"section"}>
          <ToDoList />
        </section>
      </div>
    </div>
  );
};

export default Main;
