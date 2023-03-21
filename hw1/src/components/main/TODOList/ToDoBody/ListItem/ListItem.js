import "./ListItem.scss";
import { useDispatch } from "react-redux";
import { action } from "../../../../Actions/Actions";

const ListItem = (props) => {
  console.log();
  const dispatch = useDispatch();
  return (
    <li className={props.item.done ? "item item__done" : "item item__undone"}>
      <p className="item__text">{props.item.title}</p>

      <div className="item__statuses">
        <input
          className={"item__checkbox"}
          id={`check_${props.id}`}
          type="checkbox"
          defaultChecked={props.item.done}
          onChange={() => dispatch(action.setNewStatus(props.id))}
        />
        {props.item.done ? (
          <label
            htmlFor={`check_${props.id}`}
            className={"item__status item__status--done"}
          >
            Done
          </label>
        ) : (
          <label
            htmlFor={`check_${props.id}`}
            className={"item__status item__status--undone"}
          >
            Uncompleted :(
          </label>
        )}
      </div>
    </li>
  );
};

export default ListItem;
