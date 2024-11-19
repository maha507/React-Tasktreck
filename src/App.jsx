import React from "react";
import "./App.css";
import TaskForm from "./components/taskForm";
import TaskColumn from "./components/TaskColumn";
import TodoIcon from "./assets/target.png";
import DoingIcon from "./assets/star-symbol-icon.png";
import DoneIcon from "./assets/confirm-icon.png";

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <TaskColumn columnName="To Do" icon={TodoIcon} />
        <TaskColumn columnName="Doing" icon={DoingIcon} />
        <TaskColumn columnName="Done" icon={DoneIcon} />
      </main>
    </div>
  );
};

export default App;
