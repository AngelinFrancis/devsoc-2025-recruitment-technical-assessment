import AvailableRoom from './AvailableRoom';

const Room = ({ name, numRooms, buildingFilename }) => {
  return (
    <div className='flex relative justify-center h-full'>
      <img 
        src={buildingFilename}
        alt="Building room"
        className='w-full rounded-xl h-full'
      />
      <AvailableRoom numRooms={numRooms}/>
      <h4 className='flex px-4 py-3 md:bg-[#d1633e] w-[93%] rounded-lg text-white absolute inset-y-1/2 md:inset-auto md:bottom-4 lg:bottom-2 text-2xl md:text-base lg:text-sm h-max font-medium'>{name}</h4>
    </div>
  )
}

export default Room;