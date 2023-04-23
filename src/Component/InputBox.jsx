import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./InputBox.css";

const InputBox = ({ onHandleChange, onHandleClick }) => {
  return (
    <div className="input-box">
      <input type="text" placeholder="Add Items" onChange={onHandleChange} />
      <button onClick={onHandleClick}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default InputBox;
