const initialState = {
  todoList: [
    {
      title: "Smth very important",
      id: 1,
      done: false,
    },
    {
      title: "Another very important thing",
      id: 2,
      done: false,
    },
    {
      title: "Ordinary thing",
      id: 3,
      done: true,
    },
  ],
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "SET_NEW_STATUS":
      return {
        ...state,
        todoList: state.todoList.map((item) => {
          if (item.id === action.payload) {
            return { ...item, done: !item.done };
          } else {
            return item;
          }
        }),
      };
    default:
      return state;
  }
};
export default todoReducer;
