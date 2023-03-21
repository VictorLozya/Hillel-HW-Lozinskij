import Nav from "../nav/nav";
import "./main.scss";
import ToDoList from "./TODOList/ToDoList";
const Main = () => {
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
