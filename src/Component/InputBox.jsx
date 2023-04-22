import React from "react";

const InputBox = ({ onHandleChange, onHandleClick }) => {
  return (
    <div>
      <input type="text" placeholder="Add Items" onChange={onHandleChange} />
      <button onClick={onHandleClick}>Add</button>
    </div>
  );
};

export default InputBox;
