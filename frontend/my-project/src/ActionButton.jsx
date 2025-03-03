import { MdFilterAlt } from "react-icons/md";
import { CgSortAz } from "react-icons/cg";

const ActionButton = ({ label, style }) => {
  return (
    <button
      className={`flex items-center justify-center font-bold text-[#d1633e] text-lg border-[#d1633e] rounded-xl w-32 h-10 border-2 absolute ${style}`}>
      { (label == 'Filters') ? (
        <MdFilterAlt className='h-7 w-7'/>
      ) : (
        <CgSortAz className='h-8 w-8'/>
      )}
      <h4>{ label }</h4>
    </button>
  )
}

export default ActionButton;