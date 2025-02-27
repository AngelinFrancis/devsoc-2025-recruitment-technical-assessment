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
      <h4 className='flex p-4 bg-[#d1633e] w-[93%] rounded-lg text-white absolute bottom-4 text-md font-medium'>{name}</h4>
    </div>
  )
}

export default Room;