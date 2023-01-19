import React, { useState, useEffect } from "react";
import CreateBox from "./CreateBox";
import Header from "./Header";
import ToDoList from "./ToDoList";
import Done from "./DoneList";

const getTodos = () => {
  let todos = localStorage.getItem("todos");
  if (todos) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return [];
  }
};

const getDone = () => {
  let done = localStorage.getItem("done");
  if (done) {
    return JSON.parse(localStorage.getItem("done"));
  } else {
    return [];
  }
};

function App() {
  const [box, setBox] = useState(false);
  const [inputWrite, setInputWrite] = useState("");
  const [items, setItems] = useState(getTodos());
  const [newItem, setNewItem] = useState(getDone());

  const handleInputchange = (e) => {
    setInputWrite(e.target.value);
  };

  const handleSaveButton = () => {
    if (inputWrite == 0) {
      alert("Please write something.");
      setInputWrite("");
    } else {
      setItems([...items, inputWrite]);
      setInputWrite("");
    }
  };

  const Open = () => {
    setBox(!box);
  };
  const Close = () => {
    setBox(false);
  };

  const goToDone = (id) => {
    console.log(id);
    const newItems = items.filter((_element, index) => {
      return index !== id;
    });
    console.log("New item ", newItems);
    setItems(newItems);

    const deletedItem = items.filter((_element, index) => {
      console.log(id);
      return index === id;
    });
    console.log("deleted item ", deletedItem);
    setNewItem([...newItem, deletedItem]);
  };

  const goToTodo = (id) => {
    const upItem = newItem.filter((_element, index) => {
      return index === id;
    });
    setItems([...items, upItem]);
    const newItems = newItem.filter((_element, index) => {
      return index !== id;
    });
    setNewItem(newItems);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem("done", JSON.stringify(newItem));
  }, [newItem]);

  return (
    <>
      <h1 className="border shadow text-center p-3 text-3xl">To-Do</h1>
      <div className="py-10 m-4">
        <div className="mx-auto max-w-7xl">
          <Header />
        </div>

        <div className="mx-auto mt-5 px-4 max-w-7xl">
          <ToDoList items={items} setItems={setItems} goToDone={goToDone} />

          {!box && (
            <button
              type="button"
              onClick={Open}
              className="inline-flex mt-2 items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-yellow-500 border border-transparent rounded-full shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              + Add a todo
            </button>
          )}

          {box && (
            <CreateBox
              inputWrite={inputWrite}
              handleInputchange={handleInputchange}
              handleSaveButton={handleSaveButton}
              Close={Close}
            />
          )}

          <div>
            <Done
              newItem={newItem}
              setNewItem={setNewItem}
              goToTodo={goToTodo}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
