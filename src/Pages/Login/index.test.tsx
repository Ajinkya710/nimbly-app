import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import Login from ".";
import {
  selectError,
  selectIsAuthenticated,
  selectIsLoading,
} from "../../store/auth/selector";

jest.mock("../../store/auth/action.ts");

describe("Login Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should render the login form with username, password fields, and submit button", async () => {
    // Mocking selectors for loading and authentication state
    jest
      .spyOn(require("react-redux"), "useSelector")
      .mockImplementation((selector) => {
        if (selector === selectIsAuthenticated) {
          return false; // User is not authenticated
        }
        if (selector === selectIsLoading) {
          return false; // Not loading
        }
        return undefined;
      });

    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    // Check if form elements are rendered
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign In" })).toBeInTheDocument();
  });

  it("should display error message when error is present", async () => {
    const mockError = "Invalid credentials";

    jest
      .spyOn(require("react-redux"), "useSelector")
      .mockImplementation((selector) => {
        if (selector === selectError) {
          return mockError;
        }
        if (selector === selectIsLoading) {
          return false;
        }
        if (selector === selectIsAuthenticated) {
          return false;
        }
        return undefined;
      });

    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    expect(screen.getByText(mockError)).toBeInTheDocument();
  });
});
