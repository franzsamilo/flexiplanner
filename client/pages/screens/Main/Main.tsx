import React, { useState } from 'react'
import Scheduler from '../Scheduler/Scheduler'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Task from '../Task/Task'
import academicsIcon from 'public/assets/icons/academics-icon.png'
import workIcon from 'public/assets/icons/work-icon.png'
import personalIcon from 'public/assets/icons/user-icon-white.png';
import AuthWrapper from '../Components/AuthWrapper'

const iconArray = [
  { buttonText: 'Academics', icon: academicsIcon },
  { buttonText: 'Work', icon: workIcon },
  { buttonText: 'Personal', icon: personalIcon}
];
function MainPage () {
  const [headerText, setHeaderText] = useState('Academics')
  const [headerIcon, setHeaderIcon] = useState(academicsIcon)

  function updateHeaderText (text: string) {
    setHeaderText(text)
  }
  function updateHeaderIcon (icon: typeof iconArray[number]['icon']) {
    const iconObject = iconArray.find(item => item.icon === icon);
    if (iconObject) {
      setHeaderIcon(iconObject.icon);
    }
   }
   
   
  return (
    <AuthWrapper>
    <div className='flex flex-col min-h-screen bg-dirty'>
      <div className='flex flex-row '>
        {' '}
        <Sidebar
          updateHeaderText={updateHeaderText}
          updateHeaderIcon={updateHeaderIcon}
        />
        <main className='flex flex-col w-full h-auto '>
          <Header buttonText={headerText} icon={headerIcon} />
          <Scheduler />
          <Task />
          <Footer />
        </main>
      </div>
    </div>
    </AuthWrapper>
  )
}

export default MainPage
