import { useState, useEffect } from 'react';
import NavBar from './Navbar';
import ActionButton from './ActionButton';
import SearchBar from './SearchBar';
import data from '../../data.json';
import AvailableRoom from './AvailableRoom';

const App = () => {
  const [ items, setItems ] = useState([]);
  
  useEffect(() => {
    setItems(data);
  }, [])

  return (
    <div>
      <NavBar />
      {items.map((item) => (
        <div key={item.name}>
          <h4 className='flex p-2 bg-[#d1633e] w-4/5 rounded-lg text-white'>{item.name}</h4>
          <AvailableRoom numRooms={item.rooms_available}/>
          <img src={item.building_file} alt="Building room" />
        </div>
      ))}
    </div>
  )
}

export default App;
