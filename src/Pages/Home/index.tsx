import React from "react";
import UserDetails from "./components/UserDetails";
import ToDoList from "./components/ToDoList";

const Home = () => {
  return (
    <div>
      <UserDetails />
      <ToDoList />  
    </div>
  );
};

export default Home;
