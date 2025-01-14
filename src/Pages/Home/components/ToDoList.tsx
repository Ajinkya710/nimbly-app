import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectToDoList } from "../store/selector";
import { useAppDispatch } from "../../../store";
import { getToDoList } from "../store/action";

const ToDoList = () => {
  const todoList = useSelector(selectToDoList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getList = () => {
      dispatch(getToDoList());
    };
    getList();
  }, []);

  return (
    <div>
      {todoList?.todos?.map((todo: any) => (
        <p>{todo.todo}</p>
      ))}
    </div>
  );
};

export default ToDoList;
