import { useState, useEffect } from 'react';
import NavBar from './Navbar';
import ActionButton from './ActionButton';
import SearchBar from './SearchBar';
import data from '../../data.json';
import Room from './Room';
import useModeStore from './modeStore';

const App = () => {
  const [ items, setItems ] = useState([]);
  const { darkMode } = useModeStore();
  
  useEffect(() => {
    setItems(data);
  }, [])

  return (
    <div className={`flex flex-col h-full lg:h-screen w-full ${darkMode && 'bg-black'}`}>
      <NavBar />
      <div className='flex flex-col w-full p-3 h-full lg:h-screen gap-4 relative'>
        <div className='flex flex-col md:flex-row w-full h-max-content items-center justify-center gap-3 md:gap-0'>
          <SearchBar />
          <div className='flex h-10'>
            <ActionButton label='Filters' style='left-3'/>
            <ActionButton label='Sort' style='right-3'/>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 flex-1'>
          {items.map((item) => (
            <Room key={item.name} name={item.name} numRooms={item.rooms_available} buildingFilename={`assets/${item.building_picture.replace('.', '')}`}/>
          ))}
        </div>

      </div>

    </div>
  )
}

export default App;
