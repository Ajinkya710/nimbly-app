import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import ToDoList from ".";
import { selectPaginationMeta, selectToDoList } from "./store/selector";

jest.mock("./store/action");

describe("ToDoList Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("ToDoList", () => {
    it("should render the ToDo list with a table", async () => {
      const mockTodos = [
        { id: 1, todo: "Test Todo 1", completed: false },
        { id: 2, todo: "Test Todo 2", completed: true },
      ];
      const mockPagination = { currentPage: 1, totalItems: 2 };

      jest
        .spyOn(require("react-redux"), "useSelector")
        .mockImplementation((selector) => {
          if (selector === selectToDoList) {
            return mockTodos;
          }
          if (selector === selectPaginationMeta) {
            return mockPagination;
          }
          return undefined;
        });

      render(
        <Provider store={store}>
          <ToDoList />
        </Provider>
      );

      expect(screen.getByText("ID")).toBeInTheDocument();
      expect(screen.getByText("Todo")).toBeInTheDocument();
      expect(screen.getByText("Completed")).toBeInTheDocument();

      expect(screen.getByText("Test Todo 1")).toBeInTheDocument();
      expect(screen.getByText("Test Todo 2")).toBeInTheDocument();

      expect(screen.getByText("1")).toBeInTheDocument();
    });

    it("should display error message when error is present", async () => {
      const mockError = "Failed to load todos";

      render(
        <Provider store={store}>
          <ToDoList />
        </Provider>
      );
      expect(screen.getByText(mockError)).toBeInTheDocument();
    });
  });
});
