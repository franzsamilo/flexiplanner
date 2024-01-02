import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

//Assets
import logo from '/public/assets/logo.png';
import userIconBlack from '/public/assets/icons/user-icon-black.png';
import userIconWhite from '/public/assets/icons/user-icon-white.png';
import searchIcon from 'public/assets/icons/search-icon.png';
import settingsIcon from 'public/assets/icons/settings-icon.png';
import remindersIcon from 'public/assets/icons/reminders-icon.png';
import academicsIcon from 'public/assets/icons/academics-icon.png';
import workIcon from 'public/assets/icons/work-icon.png';
import createIcon from 'public/assets/icons/create-icon.png';

function Task() {
  return (
    <div className="flex flex-col min-h-screen bg-dirty">
      <div className="flex flex-row">
        {/* SIDEBAR */}
        <div className="flex flex-col min-h-screen bg-white w-[250px]">
          {/* USER-PIC & USERNAME */}
          <div
            className="flex flex-row my-5 items-center pb-4 pl-5 mb-0 text-lg font-semibold"
            style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.3)' }}
          >
            <button>
              <div className="bg-dirty rounded-full w-[40px] h-[40px] flex justify-center items-center">
                <Image
                  src={userIconBlack}
                  alt="user-pic"
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </button>
            <button>
              <div className="px-1">markrenzotan</div>
            </button>
          </div>

          <div className="flex flex-col pl-5 text-tertiary text-lg font-bold">
            <button className="flex flex-row py-1 pl-2 mr-28 my-2">
              <div className="w-[25px] flex items-center">
                <Image src={searchIcon} alt="search-icon" />
              </div>
              <div className="pl-3">Search</div>
            </button>

            <button className="flex flex-row py-1 pl-2 mr-24 my-2">
              <div className="w-[25px] flex items-center">
                <Image src={settingsIcon} alt="settings-icon" />
              </div>
              <div className="pl-3">Settings</div>
            </button>

            <button className="flex flex-row py-1 pl-2 mr-20 my-2">
              <div className="w-[25px] flex items-center">
                <Image src={remindersIcon} alt="reminders-icon" />
              </div>
              <div className="pl-3">Reminders</div>
            </button>
          </div>

          <div className="flex flex-col bg-dirty mx-3 my-5 rounded-2xl">
            <div className="text-tertiary pl-2 text-lg font-medium">
              Categories
            </div>
            <button className="flex flex-row items-center px-4 py-3 my-2 mx-4 bg-secondary rounded-2xl">
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

            <button className="flex flex-row items-center px-3 py-3 my-2 mx-4 bg-main rounded-2xl">
              <div>
                <Image
                  src={academicsIcon}
                  alt="academics-icon"
                  className="w-[35px]"
                />
              </div>
              <div className="text-[#fff2f2] font-bold pl-3 text-xl justify-center">
                Academics
              </div>
            </button>

            <button className="flex flex-row items-center px-4 py-3 my-2 mx-4 bg-secondary rounded-2xl">
              <div>
                <Image src={workIcon} alt="work-icon" className="w-[30px]" />
              </div>
              <div className="text-[#fff2f2] font-bold pl-3 text-xl justify-center">
                Work
              </div>
            </button>

            <button className="flex flex-row items-center px-4 py-3 my-2 mx-4 bg-secondary rounded-2xl">
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

        <main className="flex flex-col w-full h-auto">
          <header className="flex flex-row bg-main items-center">
            <div>
              <div className="flex flex-row  ml-2">
                <Image
                  src={academicsIcon}
                  alt="academics-icon"
                  className="w-[50px] h-[60px]"
                />
                <div className="flex flex-col pt-2">
                  <div className="text-white  text-2xl font-bold pl-2">
                    Academics
                  </div>
                  <div className="flex flex-row justify-end mt-2 pb-1 text-sm">
                    <button className=" text-dirty font-medium px-3">
                      Schedule
                    </button>
                    <button className=" text-white font-semibold px-3 border-b-2 border-white">
                      Tasks
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-auto pr-2">
              <Image src={logo} alt="logo" className="w-[60px]" />
            </div>
          </header>

          <div className="flex justify-center my-auto text-3xl text-black font-black">
            HAHA WLA UNOD
          </div>
        </main>
      </div>

      <footer className="bg-main text-white p-4 h-40">
        <div className="flex justify-between">
          <div className="flex items-start">
            <div className="mr-2">
              <Image src={logo} alt="" className="h-20 w-20 object-cover" />
            </div>
            <div className="overflow-wrap">
              <span className="italic text-lg font-medium max-w-xs break-words">
                About Us:
              </span>
              <h2 className="max-w-[40%]">
                At the core of FlexiPlanner lies innovation by the Liberal
                Party, offering a flexible way to organize. Empowering through
                technology for a brighter, efficient tomorrow.
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-start ml-4">
            <div className="mr-4">
              <span className="italic text-lg font-medium">Contact Us:</span>
              <h1 className="text-lg font-medium">Feel free to reach out:</h1>
              <p>Email: liberalparty@gmail.com</p>
              <p>Contact Number: 09696969699</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Task;
