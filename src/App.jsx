import React, { useState, useEffect } from "react";
import CreateBox from "./CreateBox";
import Header from "./Header";
import ToDoList from "./ToDoList";
import DoneList from "./DoneList";

const getList1 = () => {
  let list1 = localStorage.getItem("list1");
  if (list1) {
    return JSON.parse(localStorage.getItem("list1"));
  } else {
    return [];
  }
};

const getList2 = () => {
  let list1 = localStorage.getItem("list2");
  if (list1) {
    return JSON.parse(localStorage.getItem("list2"));
  } else {
    return [];
  }
};

function App() {
  const [write, setWrite] = useState(false);
  const [inputWrite, setInputWrite] = useState("");
  const [items, setItems] = useState(getList1());
  const [newItem, setNewItem] = useState(getList2());

  const handleInputchange = (event) => {
    setInputWrite(event.target.value);
  };

  const handleSaveButton = () => {
    if (inputWrite == 0) {
      setInputWrite("");
    } else {
      setItems([...items, inputWrite]);
      setInputWrite("");
    }
  };

  const Open = () => {
    setWrite(!write);
  };
  const Close = () => {
    setWrite(false);
  };

  const deleteItem = (id) => {
    console.log(id);
    const newItems = items.filter((element, index) => {
      return index !== id;
    });
    setItems(newItems);

    const deletedItem = items.filter((element, index) => {
      return index === id;
    });
    setNewItem([...newItem, deletedItem]);
  };

  const addItem = (id) => {
    console.log(id);
    const newItems = newItem.filter((element, index) => {
      return index !== id;
    });
    setNewItem(newItems);
  };

  const goUp = (id) => {
    const upItem = newItem.filter((element, index) => {
      return index === id;
    });
    setItems([...items, upItem]);
    const newItems = newItem.filter((element, index) => {
      return index !== id;
    });
    setNewItem(newItems);
  };

  useEffect(() => {
    localStorage.setItem("list1", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem("list2", JSON.stringify(newItem));
  }, [newItem]);

  return (
    <>
      <h1 className="border shadow text-center p-3 text-3xl">To-Do</h1>
      <div className="py-10 m-4">
        <div className="mx-auto max-w-7xl">
          <Header />
        </div>

        <div className="mx-auto mt-5 px-4 max-w-7xl">
          <ToDoList items={items} setItems={setItems} deleteItem={deleteItem} />

          {!write && (
            <button
              type="button"
              onClick={Open}
              className="inline-flex mt-2 items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-yellow-500 border border-transparent rounded-full shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              + Add a todo
            </button>
          )}

          {write && (
            <CreateBox
              inputWrite={inputWrite}
              handleInputchange={handleInputchange}
              handleSaveButton={handleSaveButton}
              Close={Close}
            />
          )}

          <div>
            <DoneList newItem={newItem} setNewItem={setNewItem} goUp={goUp} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
