/* eslint-disable @next/next/no-img-element */

import React from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import SidebarItems from "./SidebarItems";
import home from "../../../public/assets/icons/home.svg"

// {user && ( )}

function Sidebar() {
  const router = useRouter();
  const { user } = useUser();

  function Logout() {
    router.push("/api/auth/logout");
  }

  return (
    <aside className="bg-gray-700 text-white w-fit min-h-screen flex flex-col items-center justify-center text-center pr-3 border-r-3 ">
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center justify-center text-center mb-6">
          <h1 className="text-3xl">Flexiplanner</h1>
        </div>
        <div className="flex flex-row items-center mb-4">
          {user && (
            <img src={user.picture} alt="" className="w-12 h-12 rounded-full" />
          )}
          {user && <h1 className="text-xl font-bold ml-2">{user.name}</h1>}
        </div>
        {user && <h2 className="text-lg mb-4">{user.email}</h2>}
        <div className="w-full bg-slate-400 h-0.5 mb-4" />
        <div className="items-center justify-center text-center mt-5">
            
        </div>
        
        <div className="flex-grow" />
        <div className="text-center">
          <button
            onClick={Logout}
            className="p-3 border-2 border-white rounded-2xl hover:bg-gray-600 focus:bg-gray-600 hover:text-red-500 focus:border-red-500"
          >
            Log Out
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
