import React from "react";

function Header() {
  function handleReload() {
    location.reload();
  }

  return (
    <div className="flex flex-wrap px-4 space-y-2 justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Things to get done</h1>
      </div>

      <div>
        <button
          onClick={handleReload}
          className="inline-flex rounded-lg items-center px-4 py-2 text-sm font-medium text-white bg-yellow-500 border shadow-sm hover:bg-yellow-600"
        >
          Refresh
        </button>
      </div>
    </div>
  );
}

export default Header;
