import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./InputList.css";

const InputList = ({ toDoItem, onHandleDelete }) => {
  return (
    <div>
      {toDoItem.map((item, index) => (
        <div key={index} className="list">
          <input type="checkbox" />
          <p>{item.message}</p>
          <button onClick={() => onHandleDelete(index)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default InputList;
