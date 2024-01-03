import React from 'react'
import Image from 'next/image'


import userIconBlack from '/public/assets/icons/user-icon-black.png';
import userIconWhite from '/public/assets/icons/user-icon-white.png';
import searchIcon from 'public/assets/icons/search-icon.png';
import settingsIcon from 'public/assets/icons/settings-icon.png';
import remindersIcon from 'public/assets/icons/reminders-icon.png';
import academicsIcon from 'public/assets/icons/academics-icon.png';
import workIcon from 'public/assets/icons/work-icon.png';
import createIcon from 'public/assets/icons/create-icon.png';

function Sidebar () {
    return (
        <div className="flex flex-col min-h-screen bg-white w-[250px] shadow-xl">
        <div
          className="flex flex-row my-4 items-center pb-4 pl-5 mb-0 text-lg font-semibold"
          style={{ borderBottom: '2px solid rgba(0, 0, 0, 0.3)' }}
        >
          <button className="bg-dirty rounded-full w-[40px] h-[40px] flex justify-center items-center hover:bg-dirty">
            <Image
              src={userIconBlack}
              alt="user-pic"
              className="w-full h-full object-contain p-2"
            />
          </button>
          <button className="px-1 rounded-lg hover:bg-dirty">
            markrenzotan
          </button>
        </div>

        <div className="flex flex-col pl-5 text-tertiary text-lg font-bold">
          <button className="flex flex-row py-1 pl-2 mr-10 my-2 rounded-full hover:bg-dirty">
            <div className="w-[25px] flex items-center">
              <Image src={searchIcon} alt="search-icon" />
            </div>
            <div className="pl-3">Search</div>
          </button>

          <button className="flex flex-row py-1 pl-2 mr-10 my-2 rounded-full hover:bg-dirty">
            <div className="w-[25px] flex items-center">
              <Image src={settingsIcon} alt="settings-icon" />
            </div>
            <div className="pl-3">Settings</div>
          </button>

          <button className="flex flex-row py-1 pl-2 mr-10 my-2 rounded-full hover:bg-dirty">
            <div className="w-[25px] flex items-center">
              <Image src={remindersIcon} alt="reminders-icon" />
            </div>
            <div className="pl-3">Reminders</div>
          </button>
        </div>

        <div className="flex flex-col bg-dirty mx-3 my-5 rounded-2xl shadow-lg">
          <div className="text-tertiary pl-2 text-lg font-medium">
            Categories
          </div>
          <button className="flex flex-row items-center px-4 py-3 my-2 mx-4 bg-secondary rounded-2xl hover:bg-main">
            <div>
              <Image
                src={userIconWhite}
                alt="user-icon"
                className="w-[25px]"
              />
            </div>
            <div className="text-[#fff2f2] font-bold pl-5 text-xl justify-center">
              Personal
            </div>
          </button>

          <button className="flex flex-row items-center pl-3 py-3 my-2 mx-4 bg-main rounded-2xl hover:bg-main">
            <div>
              <Image
                src={academicsIcon}
                alt="academics-icon"
                className="w-[35px]"
              />
            </div>
            <div className="text-[#fff2f2] pl-3 font-bold text-[18px] justify-center">
              Academics
            </div>
          </button>

          <button className="flex flex-row items-center px-4 py-3 my-2 mx-4 bg-secondary rounded-2xl hover:bg-main">
            <div>
              <Image src={workIcon} alt="work-icon" className="w-[30px]" />
            </div>
            <div className="text-[#fff2f2] font-bold pl-3 text-xl justify-center">
              Work
            </div>
          </button>

          <button className="flex flex-row items-center px-4 py-3 my-2 mx-4 bg-secondary rounded-2xl hover:bg-main">
            <div>
              <Image
                src={createIcon}
                alt="create-icon"
                className="w-[30px]"
              />
            </div>
            <div className="text-[#fff2f2] font-bold pl-3 text-xl justify-center">
              Create
            </div>
          </button>
        </div>
      </div>

    )
}
export default Sidebar