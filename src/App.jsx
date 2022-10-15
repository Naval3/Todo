import React, { useState } from "react";
import Header from "./Header";

function App() {
  const [input, setInput] = useState(false);

  function handleInputOpner() {
    setInput(!input);
  }

  return (
    <>
      <h1 className="bg-green-500 text-center p-3 text-3xl">ToDo</h1>
      <div className="py-10">
        <div className="mx-auto max-w-7xl">
          <Header />
        </div>

        <div className="mx-auto max-w-7xl">
          <h3 className="text-xl">Things To Do</h3>
          <button
            type="button"
            onClick={handleInputOpner}
            className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-yellow-500 border border-transparent rounded-full shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            + Add a todo
          </button>
          {input && (
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-xl">Create a todo</h3>
                <form className="mt-5"></form>
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="to-do" className="sr-only">
                    New Todo
                  </label>
                  <input
                    id="to-do"
                    placeholder="Write a todo!!"
                    className="block w-full py-2 px-3 rounded-md shadow-sm sm:text-sm"
                  />
                  <div className="flex justify-start pt-5">
                    <button className="bg-yellow-500 hover:bg-yellow-600">
                      Save
                    </button>
                    <button className="">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
