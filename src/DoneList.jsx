import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

function DoneList(props) {
  const handleDeleteItem = (key) => {
    const newList = props.newItem.filter((element, index) => {
      return index !== key;
    });
    props.setNewItem(newList);
  };

  return (
    <div>
      <h3 className="mt-5 text-xl text-gray-600 font-medium">Things done</h3>
      {props.newItem.length <= 0 && (
        <div className="text-xl text-gray-500 py-2">No todos here!!</div>
      )}
      {props.newItem.map((element, index) => {
        return (
          <>
            <div className="flex justify-between max-w-sm">
              <div key={index} className="gap-2">
                <input onClick={() => props.goUp(index)} type="checkbox" />
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

export default DoneList;
