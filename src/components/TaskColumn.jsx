import React from "react";
import "./TaskColumn.css";
import Todo from "../assets/target.png";
import TaskCard from "./TaskCard";

const TaskColumn = ({ columnName, icon }) => {
  return (
    <section className="app_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt=""></img>
        {columnName}
      </h2>
      <TaskCard />
    </section>
  );
};

export default TaskColumn;
