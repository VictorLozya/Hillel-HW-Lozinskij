const actions = {
  addNew: "ADD_TASK",
  setNewStatus: "SET_NEW_STATUS",
};
export const action = {
  addNewTask: (value) => {
    return { type: actions.addNew, payload: value };
  },
  setNewStatus: (value) => {
    return { type: actions.setNewStatus, payload: value };
  },
};
