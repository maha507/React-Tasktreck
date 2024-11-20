import React from "react";
import "./TaskColumn.css";
import Todo from "../assets/target.png";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon, tasks, status }) => {
  return (
    <section className="app_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt=""></img>
        {title}
      </h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard key={index} columnName={task.task} tags={task.tags} />
          )
      )}
      <TaskCard />
    </section>
  );
};

export default TaskColumn;
