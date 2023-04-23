import React from "react";

const InputList = ({ toDoItem, onHandleDelete }) => {
  return (
    <div>
      {toDoItem.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <input type="checkbox" />
          <p style={{ margin: "20px" }}>{item.message}</p>
          <button style={{ margin: "20px" }} onClick={() => onHandleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default InputList;
