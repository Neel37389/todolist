import React from "react";

const InputList = ({ toDoItem, onHandleDelete }) => {
  return (
    <div>
      {toDoItem.map((item, index) => (
        <div key={index} style={{ display: "flex" }}>
          <input type="checkbox" />
          <p style={{ margin: "20px" }}>{item.message}</p>
          <button onClick={onHandleDelete}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default InputList;
