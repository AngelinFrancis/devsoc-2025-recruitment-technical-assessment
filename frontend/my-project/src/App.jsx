import { useState, useEffect } from 'react';
import NavBar from './Navbar';
import ActionButton from './ActionButton';
import SearchBar from './SearchBar';
import data from '../../data.json';
import Room from './Room';

const App = () => {
  const [ items, setItems ] = useState([]);
  
  useEffect(() => {
    setItems(data);
  }, [])

  return (
    <div className='flex flex-col h-screen w-full'>
      <NavBar />
      <div className='flex w-full h-16 '>

      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 flex-1'>
        {items.map((item) => (
          <Room key={item.name} name={item.name} numRooms={item.rooms_available} buildingFile={item.building_file}/>
        ))}
      </div>
    </div>
  )
}

export default App;
