import { RootState } from "../../../store";

const selectToDoList = (state: RootState) => state.toDo.todos;

const selectPaginationMeta = (state: RootState) => state.toDo.pagingMeta;

export { selectToDoList, selectPaginationMeta };
