import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

function ToDoList(props) {
  const handleDeleteItem = (key) => {
    const newList = props.items.filter((element, index) => {
      return index !== key;
    });
    props.setItems(newList);
  };

  return (
    <div>
      <h3 className="text-xl text-gray-600 font-medium">Things to do</h3>

      {props.items.length <= 0 && (
        <div className="text-xl text-gray-500 py-2">No todos here!!</div>
      )}

      {props.items.map((element, index) => {
        return (
          <>
            <div className="flex justify-between max-w-sm">
              <div key={index} className="gap-4">
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  onClick={() => props.deleteItem(index)}
                />
                {element}
              </div>
              <div>
                <BsFillTrashFill
                  className="cursor-pointer"
                  onClick={() => handleDeleteItem(index)}
                />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default ToDoList;
