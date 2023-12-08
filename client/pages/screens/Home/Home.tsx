import React from "react";
import Router from "next/router";

function Home() {

  function navigateToScheduler() {
    Router.push("/screens/Scheduler/Scheduler");
  }

  function navigateToTasks() {
    Router.push("/screens/Task/Task");
  }

  return (
    <div className="flex-row w-full h-full">
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={navigateToScheduler}>
          Scheduler
        </button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={navigateToTasks}>
          Task
        </button>
    </div>
  );
}

export default Home;
