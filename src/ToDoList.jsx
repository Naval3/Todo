import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

function ToDoList({ items, setItems, goToDone }) {
  const handleDeleteItem = (key) => {
    const newList = items.filter((_element, index) => {
      return index !== key;
    });
    setItems(newList);
  };

  return (
    <div>
      <h3 className="text-xl text-gray-600 font-medium">Things to do</h3>

      {items.length <= 0 && (
        <div className="text-xl text-gray-500 py-2">No todos here!!</div>
      )}

      {items.map((element, index) => {
        return (
          <>
            <div className="flex justify-between max-w-sm">
              <div key={index} className="gap-3 flex">
                <div>
                  <input
                    className="cursor-pointer"
                    type="checkbox"
                    onClick={() => goToDone(index)}
                  />
                </div>
                <div>{element}</div>
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
