import React from "react";

const InputList = ({ toDoItem }) => {
  return (
    <div>
      {toDoItem.map((item, index) => (
        <div key={index}>
          <input type="checkbox" />
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
};

export default InputList;
