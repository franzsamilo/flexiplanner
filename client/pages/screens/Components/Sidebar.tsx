import React from 'react'
import Image from 'next/image'
import userIconBlack from '/public/assets/icons/user-icon-black.png'
import userIconWhite from '/public/assets/icons/user-icon-white.png'
import remindersIcon from 'public/assets/icons/reminders-icon.png'
import academicsIcon from 'public/assets/icons/academics-icon.png'
import workIcon from 'public/assets/icons/work-icon.png'
import createIcon from 'public/assets/icons/create-icon.png'
import logoutIcon from 'public/assets/icons/right-from-bracket-solid.svg'

interface SidebarProps {
  updateHeaderText(text: string): void
}

function Sidebar ({ updateHeaderText }: SidebarProps) {
  function handleButtonClick (buttonText: string) {
    updateHeaderText(buttonText)
  }

  return (
    <div className='flex flex-col h-screen sticky top-0 bg-white w-[250px] shadow-xl'>
      <div className='flex items-center pb-4 pl-5 mb-0 text-lg font-semibold pt-3 border-b'>
        <button className='bg-dirty rounded-full w-[40px] h-[40px] flex justify-center items-center hover:bg-dirty'>
          <Image
            src={userIconBlack}
            alt='user-pic'
            className='w-full h-full object-contain p-2'
          />
        </button>
        <button className='px-1 rounded-lg hover:bg-dirty'>markrenzotan</button>
      </div>

      <div className='flex flex-col pl-5 text-tertiary text-lg font-bold'>
        <button className='flex items-center py-1 pl-2 mr-10 my-2 rounded-full hover:bg-dirty'>
          <div className='w-[25px] flex items-center'>
            <Image src={remindersIcon} alt='reminders-icon' />
          </div>
          <div className='pl-3'>Reminders</div>
        </button>
      </div>

      <div className='flex flex-col bg-dirty mx-3 my-5 rounded-2xl shadow-lg'>
        <div className='text-tertiary pl-2 text-lg font-medium'>Categories</div>
        <button
          className='flex items-center px-4 py-3 my-2 mx-4 bg-secondary rounded-2xl hover:bg-main'
          onClick={() => handleButtonClick('Personal')}
        >
          <div>
            <Image src={userIconWhite} alt='user-icon' className='w-[25px]' />
          </div>
          <div className='text-[#fff2f2] font-bold pl-5 text-xl justify-center'>
            Personal
          </div>
        </button>

        <button
          className='flex items-center pl-3 py-3 my-2 mx-4 bg-main rounded-2xl hover:bg-main'
          onClick={() => handleButtonClick('Academics')}
        >
          <div>
            <Image
              src={academicsIcon}
              alt='academics-icon'
              className='w-[35px]'
            />
          </div>
          <div className='text-[#fff2f2] pl-3 font-bold text-[18px] justify-center'>
            Academics
          </div>
        </button>

        <button
          className='flex items-center px-4 py-3 my-2 mx-4 bg-secondary rounded-2xl hover:bg-main'
          onClick={() => handleButtonClick('Work')}
        >
          <div>
            <Image src={workIcon} alt='work-icon' className='w-[30px]' />
          </div>
          <div className='text-[#fff2f2] font-bold pl-3 text-xl justify-center'>
            Work
          </div>
        </button>

        <button className='flex items-center px-4 py-3 my-2 mx-4 bg-secondary rounded-2xl hover:bg-main'>
          <div>
            <Image src={createIcon} alt='create-icon' className='w-[30px]' />
          </div>
          <div className='text-[#fff2f2] font-bold pl-3 text-xl justify-center'>
            Create
          </div>
        </button>
      </div>
      <button className='flex items-center px-10 py-2 my-2 mx-4 fixed bottom-1  rounded-lg hover:bg-secondary'>
        <div>
          <Image src={logoutIcon} alt='logout-icon' className='color-white w-[30px] px-1 py-1 bg-dirty rounded-full' />
        </div>
        <div className='text-black font-medium pl-3 text-lg justify-center'>
          Logout
        </div>
      </button>
    </div>
  )
}

export default Sidebar
