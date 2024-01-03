import React, { useState } from "react";
import Image from "next/image";
import AddEvent from "./AddEvent";
import Scheduler from "../Scheduler/Scheduler";
import Sidebar from "..//Components/Sidebar";
import logo from "/public/assets/logo.png";
import academicsIcon from "public/assets/icons/academics-icon.png";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Task() {
  const table = [
    "Name",
    "Descrition",
    "Priority",
    "DueDate",
    "Duration",
    "Status",
  ];

  const [showAddEvent, setShowAddEvent] = useState(false);

  function handleClickAddEvent() {
    setShowAddEvent(true);
  }

  function handleCloseAddEvent() {
    setShowAddEvent(false);
  }

  return (
    <div className="flex flex-col min-h-screen bg-dirty">
      <div className="flex flex-row">
        <Sidebar />
        <main className="flex flex-col w-full h-auto">
          <Header />
          
          <Scheduler />
          <div className="bg-pink-50">
            <div className="flex flex-col items-center mx-auto max-w-3xl ">
              <div className="ml-auto ">
                <button className="text-lg text-black font-bold py-2 px-4 rounded w-70 mb-2 mr-[450px] text-[20px]">
                  To do&apos;s
                </button>
                <button
                  className="bg-blue-300 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded w-70 mb-2"
                  onClick={handleClickAddEvent}
                >
                  + Add event
                </button>

                {showAddEvent && <AddEvent onClose={handleCloseAddEvent} />}
              </div>

              <div className="border border-gray-400 shadow rounded-[30px] p-4 h-[800px] bg-white ">
                <div className="flex flex-col md:flex-row border-b w-full pb-2">
                  {table.map((day, index) => (
                    <div key={index} className="flex-1 text-center">
                      <h4 className="font-bold px-4 md:px-10 py-2">{day}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Task;
