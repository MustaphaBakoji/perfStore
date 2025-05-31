

import { useDispatch } from 'react-redux'

import { BsTrash } from 'react-icons/bs'
import { MdUpdate } from 'react-icons/md'
import { ItemTypes } from '../types/ItemType'
import { setUpdate } from '../redux/admin'

const ROOT_URL = "https://petstore-des0.onrender.com/api"
function AdminItem(props: ItemTypes) {
    const { imageUrl, name, price, category, _id } = props
    const dispatch = useDispatch()
    return (
        <div className=' grid grid-cols-5 w-[90vw] sm:w-[90vw]   p-4 bg-white shadow rounded-md gap-x-2 place-items-center mb-2'>

            {/* Item Image and Name */}
            <div className='flex items-center space-x-3 relative  '>
                <img src={imageUrl} alt={name} className='h-10 w-10 sm:w-20 sm:h-20 object-cover rounded-full' />
                <p className='text-xs sm:text-xl font-medium text-gray-800 truncate w-16 sm:w-28'>{name}</p>


            </div>

            {/* Price */}
            <div className='text-xs sm:text-xl mx-2 text-gray-700 font-semibold  '>
                ${price}
            </div>

            {/* Quantity Controls */}
            <div className='flex flex-col items-center '>

                <div className='flex items-center space-x-2 text-green-400'>
                    {category}
                </div>
            </div>


            <BsTrash className='text-blue-400 cursor-pointer hover:text-red-700 ml-4'
                onClick={async () => {
                    try {
                        const res = await fetch(`${ROOT_URL}/delete/${_id}`, { method: "DELETE", credentials: "include", })
                        const data = await res.json()
                        console.log(data);


                    } catch (error) {
                        console.log(error);


                    }

                }} />
            <MdUpdate className='text-blue-400 cursor-pointer hover:text-green-700 ml-4'
                onClick={() => {

                    console.log("ddddddddddddddd");

                    dispatch(setUpdate({

                        name,
                        imageUrl,
                        _id,

                        category,
                        price


                    }))




                }} />

        </div >
    )
}

export default AdminItem	 
