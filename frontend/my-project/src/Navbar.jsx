import { useState } from 'react';
import ActionBar from './ActionBar';

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
        <h1 className='hidden md:block text-3xl font-bold text-[#d1633e]'>Freerooms</h1>
      </div>
      <ActionBar />
    </div>
  )
}

export default NavBar;