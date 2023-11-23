import React from 'react'
import Image from 'next/image'

interface SidebarItemsProps {
    icon : any,
    title : string,
}

function SidebarItems({icon, title} : SidebarItemsProps) {
    const Icon = icon;
    const Name = title; 

  return (
    <div className='flex flex-row items-center'>
      {Icon && <Image className='w-6 h-6 mr-16' src={Icon} alt=''/>}
        <h1 className='text-xl'>{Name}</h1>
    </div>
  )
}

export default SidebarItems
