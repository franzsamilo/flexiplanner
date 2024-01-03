import React from 'react';
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function Task() {
  return (
    <div className="flex flex-col min-h-screen bg-dirty">
      <div className="flex flex-row">
       <Sidebar/>
        <main className="flex flex-col w-full h-auto">
          <Header/>
          <div className="flex justify-center my-auto text-3xl text-black font-black">
            HAHA WLA UNOD
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
}

export default Task;
