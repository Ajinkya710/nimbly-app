import React from "react";
import { setFormFields } from "./store/slice";
import { userLogIn } from "./store/action";
import { useAppDispatch } from "../../store";

const Login = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(userLogIn());
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={(e) =>
          dispatch(setFormFields({ field: "username", value: e.target.value }))
        }
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) =>
          dispatch(setFormFields({ field: "password", value: e.target.value }))
        }
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
