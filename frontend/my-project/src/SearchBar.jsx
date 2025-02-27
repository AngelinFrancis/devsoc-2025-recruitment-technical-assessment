import { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
  const [ query, setQuery ] = useState('');
  
  return (
    <div className= 'flex w-1/2 p-2 gap-2 border border-gray-200 rounded items-center'>
      <IoSearchSharp className='fill-gray-500'/>
      <input 
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search for a building...'
        className='w-full outline-none'
      />
    </div>
  )
}

export default SearchBar;