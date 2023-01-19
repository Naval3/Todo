import React from "react";

// it is a input box.
function CreateBox({ inputWrite, handleInputchange, handleSaveButton, Close }) {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-xl">Create a todo</h3>

        <div className="w-full sm:max-w-xs">
          <label htmlFor="to-do" className="sr-only">
            New Todo
          </label>

          <input
            value={inputWrite}
            onChange={handleInputchange}
            id="to-do"
            placeholder="Write a todo!!"
            className="block w-full py-2 px-3 rounded-md shadow-sm sm:text-sm"
          />

          <div className="flex justify-start gap-2 pt-5">
            <button
              onClick={handleSaveButton}
              className="inline-flex mt-2 items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-yellow-500 disabled:bg-gray-400 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Save
            </button>

            <button
              onClick={Close}
              type="button"
              className="inline-flex mt-2 items-center px-3 py-2 text-sm font-medium leading-4 border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBox;
