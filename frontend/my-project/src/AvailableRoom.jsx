const AvailableRoom = ({ numRooms }) => {
  return (
    <div className='flex flex-row bg-white items-center px-4 py-3 gap-3 absolute top-[50%] right-[5%] md:top-3 md:right-2 rounded-2xl font-medium'>
      <div className='rounded-full bg-green-600 w-3 h-3'></div>
      <p className='hidden md:block text-xs'>{numRooms} rooms available</p>
      <p className='md:hidden font-bold'>{`${numRooms}/${numRooms}`}</p>
    </div>
  )
}

export default AvailableRoom;