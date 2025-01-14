import { RootState } from "../../../store";

const selectToDoList = (state: RootState) => state.home.todos;

export { selectToDoList };
