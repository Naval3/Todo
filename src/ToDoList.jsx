import React from "react";

// ComponentDescription
function ToDoList(props) {
  return (
    <div>
      {props.itemList.map((todo) => {
        return <p>{todo.item}</p>;
      })}
    </div>
  );
}

export default ToDoList;
