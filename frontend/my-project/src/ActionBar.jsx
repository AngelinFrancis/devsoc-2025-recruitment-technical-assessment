import { IoSearchSharp } from "react-icons/io5";
import { HiViewGrid } from "react-icons/hi";
import { RiMap2Fill } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";

const ActionBar = () => {
  return (
    <div className='flex flex-row justify-end gap-2 p-2 w-fit'>
      <IoSearchSharp className='h-10 w-10 border border-[#d1633e] rounded p-1.5 fill-[#d1633e]' />
      <HiViewGrid className='h-10 w-10 border border-[#d1633e] rounded p-1.5 bg-[#d1633e] fill-white' />
      <RiMap2Fill className='h-10 w-10 border border-[#d1633e] rounded p-1.5 fill-[#d1633e]' />
      <MdDarkMode className='h-10 w-10 border border-[#d1633e] rounded p-1.5 fill-[#d1633e]' />
    </div>
  )
}

export default ActionBar;