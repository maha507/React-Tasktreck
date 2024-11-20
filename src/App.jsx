import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/taskForm";
import TaskColumn from "./components/TaskColumn";
import TodoIcon from "./assets/target.png";
import DoingIcon from "./assets/star-symbol-icon.png";
import DoneIcon from "./assets/confirm-icon.png";

const App = () => {
  const [tasks, setTasks] = useState([]);
  console.log("tasks", tasks);
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn title="To Do" icon={TodoIcon} tasks={tasks} status="todo" />
        <TaskColumn
          title="Doing"
          icon={DoingIcon}
          tasks={tasks}
          status="doing"
        />
        <TaskColumn title="Done" icon={DoneIcon} tasks={tasks} status="done" />
      </main>
    </div>
  );
};

export default App;
