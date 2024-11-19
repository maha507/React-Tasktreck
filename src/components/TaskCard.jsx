import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import DeleteIcon from "../assets/delete.png";

const TaskCard = () => {
  return (
    <article className="task_card">
      <p className="task_text">This is a simple Task.</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag tagName="html" />
        </div>
        <div className="task_delete">
          <img className="delete_icon" src={DeleteIcon} alt=""></img>
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
