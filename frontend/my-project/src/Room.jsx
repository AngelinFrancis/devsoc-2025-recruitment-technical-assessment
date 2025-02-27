import AvailableRoom from './AvailableRoom';

const Room = ({ name, numRooms, buildingFile }) => {
  return (
    <div className='flex relative justify-center h-full'>
      <img 
        src='assets/agsm.webp' 
        alt="Building room"
        className='w-full rounded-xl'
      />
      <AvailableRoom numRooms={numRooms}/>
      <h4 className='flex p-4 bg-[#d1633e] w-5/6 rounded-lg text-white absolute bottom-4 text-xl font-medium'>{name}</h4>
    </div>
  )
}

export default Room;