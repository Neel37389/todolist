import React from "react";

const InputBox = ({ onHandleChange, onHandleClick }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <input
        style={{ padding: "10px" }}
        type="text"
        placeholder="Add Items"
        onChange={onHandleChange}
      />
      <button onClick={onHandleClick} style={{ marginLeft: "20px" }}>
        Add
      </button>
    </div>
  );
};

export default InputBox;
