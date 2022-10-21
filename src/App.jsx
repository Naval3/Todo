import React, { useState } from "react";
import CreateBox from "./CreateBox";
import Header from "./Header";
import ToDoList from "./ToDoList";

function App() {
  const [input, setInput] = useState(false);
  const [currentItem, setCurrentItem] = useState(""); //undefine - null
  console.log("this is", currentItem);
  const [itemList, updateItemList] = useState([]);
  const [buttonStatus, setButtonStatus] = useState(true);
  const [done, setDone] = useState([]);

  function handleInputOpner() {
    setInput(!input);
  }

  function onChangeHandler(e) {
    if (e.target.value.trim().length > 0) {
      setButtonStatus(false);
    } else {
      setButtonStatus(true);
    }
    setCurrentItem(e.target.value);
  }

  function addItemToList() {
    setButtonStatus(true);
    updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
    setCurrentItem("");
    console.log("string is ", itemList);
  }

  function handleInputOpner() {
    setInput(!input);
  }

  function handleCancel() {
    setInput(!input);
  }

  return (
    <>
      <h1 className="border shadow text-center p-3 text-3xl">To-Do</h1>
      <div className="py-10 m-4">
        <div className="mx-auto max-w-7xl">
          <Header />
        </div>

        <div className="mx-auto mt-5 px-4 max-w-7xl">
          <h3 className="text-xl text-gray-600 font-medium">Things to do</h3>

          <ToDoList itemList={itemList} updateItemList={updateItemList} />

          {!input && (
            <button
              type="button"
              onClick={handleInputOpner}
              className="inline-flex mt-2 items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-yellow-500 border border-transparent rounded-full shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              + Add a todo
            </button>
          )}

          {input && (
            <CreateBox
              currentItem={currentItem}
              onChangeHandler={onChangeHandler}
              buttonStatus={buttonStatus}
              addItemToList={addItemToList}
              handleCancel={handleCancel}
            />
          )}

          <div>
            <h3 className="mt-5 text-xl text-gray-600 font-medium">
              Things done
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
