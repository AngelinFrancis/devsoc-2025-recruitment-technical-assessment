const AvailableRoom = ({ numRooms }) => {
  return (
    <div className='flex flex-row bg-white items-center gap-2'>
      <div className='rounded-full bg-green-600 w-2 h-2'></div>
      <p>{numRooms} rooms available</p>
    </div>
  )
}

export default AvailableRoom;