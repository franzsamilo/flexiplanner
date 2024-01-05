import React, { useState } from 'react';
import Scheduler from '../Scheduler/Scheduler';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Task from '../Task/Task';
import academicsIcon from 'public/assets/icons/academics-icon.png';
import workIcon from 'public/assets/icons/work-icon.png';
import personalIcon from 'public/assets/icons/user-icon-white.png';
import { StaticImageData } from 'next/image';

const iconArray = [
  { buttonText: 'Academics', icon: academicsIcon },
  { buttonText: 'Work', icon: workIcon },
  { buttonText: 'Personal', icon: personalIcon },
];
function MainPage() {
  const [headerText, setHeaderText] = useState('Academics');
  const [headerIcon, setHeaderIcon] = useState(academicsIcon);
  const [selectedCategory, setSelectedCategory] = useState('');

  function updateHeader(category: string, icon: StaticImageData) {
    const iconObject = iconArray.find((item) => item.buttonText === category);
    if (iconObject) {
      setHeaderText(iconObject.buttonText);
      setHeaderIcon(iconObject.icon);
      setSelectedCategory(iconObject.buttonText);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-dirty">
      <div className="flex flex-row ">
        {' '}
        <Sidebar updateHeader={updateHeader} />
        <main className="flex flex-col w-full h-auto ">
          <Header buttonText={headerText} icon={headerIcon} />
          <Scheduler />
          <Task selectedCategory={selectedCategory} />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default MainPage;
