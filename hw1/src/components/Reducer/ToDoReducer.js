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
    case "ADD_TODO":
      return {
        todoList: [...this.todoList, action.payload],
      };
    case "DECREMENT":
      return {
        count: state.count - action.payload,
      };
    case "CLEAR":
      return {
        count: (state.count = 0),
      };
    default:
      return state;
  }
};
export default todoReducer;
