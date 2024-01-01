import React from "react";

function Sidebar() {
  return (
    <aside className="bg-gray-700 text-grey-700 w-fit min-h-screen flex flex-col items-center justify-center text-center pr-3 border-r-3 ">
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center justify-center text-center mb-6">
          <h1 className="text-3xl border-b w-full pb-2">Flexiplanner</h1>
        </div>

        <div className="flex flex-col mt-6  items-start text-grey">
          <button className="text-3xl">Search</button>
          <button className="text-3xl">Settings</button>
          <button className="text-3xl">Reminders</button>
        </div>
        <div className="bg-white p-4 shadow rounded w-full h-[300px] mt-10">
          <h2 className="text-lg font-bold mb-2">Categories</h2>
          <div className="flex flex-col mt-6 text-grey text-xl">
            <button className="bg-blue-200 rounded p-2 mb-2">Personal</button>
            <button className="bg-blue-200 rounded p-2 mb-2">Academics</button>
            <button className="bg-blue-200 rounded p-2 mb-2">Work</button>
            <button className="bg-blue-200 rounded p-2 mb-2">+ Create</button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
