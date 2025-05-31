import React from 'react'
import { BsCart } from 'react-icons/bs'
import { FaCat, FaDog, FaFish, FaKiwiBird } from 'react-icons/fa'
import { ItemTypes } from '../types/ItemType'
import { useDispatch, useSelector, } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import { RootState } from '../redux'
import { setProduct } from '../redux/ProductSlice'


function Item(prop: ItemTypes) {
    const dispatch = useDispatch()
    const { user } = useSelector((state: RootState) => (state.userReducer))
    const { imageUrl, name, price, animalTYpe, _id } = prop
    const animalStyle: string = " text-green-400 w-5 h-5 absolute right-6 top-6"
    return (
        <div className=' w-[40vw] sm:w-64 sm:h-[21rem]   rounded-md border-[1px] border-blue-950/30 relative ' onClick={() => {
            dispatch(setProduct({
                imageUrl,
                name,
                price,

                id: _id,

            }))
        }}    >
            <div className=' image w-[35vw] h-[35vw] sm:w-60  sm:h-60 mx-auto mt-4 relative '>
                <img src={imageUrl} alt="cat" className='w-[35vw] h-[35vw] sm:h-60 mx-6 mx-auto rounded-md' />
                {
                    animalTYpe === 'cats' ? <FaCat className={animalStyle} /> : animalTYpe === 'dogs' ? <FaDog className={animalStyle} /> : animalTYpe === 'fish' ? <FaFish className={animalStyle} /> : <FaKiwiBird className={animalStyle} />
                }

            </div>
            <div className='mx-10'>
                <p>{name}</p>
                <div className=' flex justify-between items-center'>
                    <span className=' text-gray-700 text-2xl font-bold'>${price}</span>

                    <BsCart className=' text-green-400 w-6 h-6' onClick={async () => {
                        if (user) {
                            try {
                                const res = await fetch(`https://petstore-des0.onrender.com/api/carts/add/${_id}`, {
                                    method: "POST",
                                    credentials: "include"
                                })
                                const data = await res.json()
                                console.log(data);

                            } catch (error) {
                                console.log(error);

                            }
                            dispatch(addToCart({

                                name,
                                imageUrl,
                                price,
                                animalTYpe,
                                _id: _id,
                                category: "toys"

                            }))
                        }




                    }} />

                </div>
            </div>

        </div>
    )
}

export default Item