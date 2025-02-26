import { useState } from 'react';

const NavBar = () => {
  const [ doorOpen, setDoorOpen ] = useState(true);

  return (
    <div className= 'flex flex-row w-full h-14 items-center border'>
      <div className='flex flex-row gap-2 p-2 flex-1'>
        {doorOpen ? (
          <img 
            src='assets/freeRoomsLogo.png'
            alt='Freerooms Door Open Logo'
            className='h-10 w-10'
            onClick={() => setDoorOpen(!doorOpen)}
          /> ) : (
          <img 
            src='assets/freeroomsDoorClosed.png'
            alt='Freerooms Door Closed Logo'
            className='h-10 w-10'
            onClick={() => setDoorOpen(!doorOpen)}
          />  
          )
        }
        <h1 className='text-3xl font-bold text-[#d1633e]'>Freerooms</h1>
      </div>

      <div className='flex flex-row justify-end gap-2 p-2 w-fit'>
        <img 
          src='assets/icons/searchIcon.svg' 
          alt='Search icon' 
          className='h-10 w-10 border border-[#d1633e] rounded p-1.5'
        />
        <img
          src='assets/icons/gridviewIcon.svg'
          alt='Grid view icon'
          className='h-10 w-10 border border-[#d1633e] rounded p-1.5 bg-[#d1633e]'
        />
        <img
          src='assets/icons/mapIcon.svg'
          alt='Map icon'
          className='h-10 w-10 border border-[#d1633e] rounded p-1.5'
        />
                <img
          src='assets/icons/darkmodeIcon.svg'
          alt='Dark Mode icon'
          className='h-10 w-10 border border-[#d1633e] rounded p-1.5'
        />
      </div>
    </div>
  )
}

export default NavBar;