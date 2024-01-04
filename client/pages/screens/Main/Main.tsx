import React, { useState } from 'react'
import Scheduler from '../Scheduler/Scheduler'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Task from '../Task/Task'

function MainPage () {
  const [headerText, setHeaderText] = useState('Academics')

  function updateHeaderText (text: string) {
    setHeaderText(text)
  }
  return (
    <div className='flex flex-col min-h-screen bg-dirty'>
      <div className='flex flex-row '>
        <Sidebar updateHeaderText={updateHeaderText} />

        <main className='flex flex-col w-full h-auto'>
          <Header buttonText={headerText} />
          <Scheduler />
          <Task />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default MainPage
