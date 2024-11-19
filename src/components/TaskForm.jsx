import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  };

  console.log(taskData);
  // const [status, setStatus] = useState("todo");
  // const handleTaskChange = (e) => {
  //   setTask(e.target.value);
  // };
  // const handleStatusChange = (e) => {
  //   setStatus(e.target.value);
  // };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="Html" />
            <Tag tagName="JavaScript" />
            <Tag tagName="Css" />
            <Tag tagName="React" />
          </div>
          <div>
            <select
              className="task_status"
              onChange={handleChange}
              name="status"
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button
              type="submit"
              className="task_submit"
              onSubmit={handleSubmit}
            >
              +Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
