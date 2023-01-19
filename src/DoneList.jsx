import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

function Done({ newItem, setNewItem, goToTodo }) {
  const handleDeleteItem = (key) => {
    const newList = newItem.filter((_element, index) => {
      return index !== key;
    });
    setNewItem(newList);
  };

  return (
    <div>
      <h3 className="mt-5 text-xl text-gray-600 font-medium">Things done</h3>
      {newItem.length <= 0 && (
        <div className="text-xl text-gray-500 py-2">No todos here!!</div>
      )}
      {newItem.map((element, index) => {
        return (
          <>
            <div className="flex justify-between max-w-sm">
              <div key={index} className="flex gap-3">
                <div>
                  <input
                    defaultChecked
                    className="cursor-pointer"
                    onClick={() => goToTodo(index)}
                    type="checkbox"
                  />
                </div>
                <div> {element}</div>
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

export default Done;
