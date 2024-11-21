import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };
  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="Html"
              selectTag={selectTag}
              selected={checkTag("Html")}
            />
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            />
            <Tag
              tagName="Css"
              selectTag={selectTag}
              selected={checkTag("Css")}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
          </div>
          <div>
            <select
              className="task_status"
              value={taskData.status}
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
