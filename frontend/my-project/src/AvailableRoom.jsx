const AvailableRoom = ({ numRooms }) => {
  return (
    <div className='flex flex-row bg-white items-center px-4 py-3 gap-3 absolute top-4 right-4 rounded-2xl font-medium'>
      <div className='rounded-full bg-green-600 w-3 h-3'></div>
      <p>{numRooms} rooms available</p>
    </div>
  )
}

export default AvailableRoom;