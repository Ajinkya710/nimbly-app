import { RootState } from "../../../store";

const selectToDoList = (state: RootState) => state.home.todos;

const selectPaginationMeta = (state: RootState) => state.home.pagingMeta;

export { selectToDoList, selectPaginationMeta };
