
import { CartItemTypes } from '../types/CartTypes'
import { useDispatch } from 'react-redux'
import { addToCart, subtractFromCart } from '../redux/cartSlice'
import { BsTrash } from 'react-icons/bs'

function CartItem(props: CartItemTypes) {
    const { quantity, totalPrice, product } = props
    const dispatch = useDispatch()
    return (
        <div className=' grid grid-cols-5 w-[90vw] sm:w-[70vw]   p-4 bg-white shadow rounded-md '>

            {/* Item Image and Name */}
            <div className='flex items-center space-x-3  '>
                <img src={product.imageUrl} alt={product.name} className='h-6 w-6 sm:w-16 sm:h-16 object-cover rounded-md' />
                <p className='text-xs sm:text-sm font-medium text-gray-800'>{product.name}</p>

            </div>

            {/* Price */}
            <div className='text-xs sm:text-lg text-gray-700 font-semibold  '>
                ${product.price}
            </div>

            {/* Quantity Controls */}
            <div className='flex flex-col items-center '>

                <div className='flex items-center space-x-2'>
                    <button className='sm:w-8 sm:h-8 w-4 h-4 font-bold flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300'
                        onClick={async () => {
                            try {
                                const res = await fetch(`https://petstore-des0.onrender.com/api/carts/add/${product._id}`, { method: "POST", credentials: "include", })
                                const data = await res.json()
                                console.log(data);

                            } catch (error) {
                                console.log(error);


                            }
                            dispatch(addToCart({ price: product.price, imageUrl: product.imageUrl, _id: product._id, category: product.category, name: product.name }))
                        }}
                    >
                        +
                    </button>
                    <span className='sm:w-6  text-center font-semibold'>{quantity}</span>
                    <button className='w-4  h-4  sm:w-8 sm:h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300'

                        onClick={async () => {

                            try {
                                const res = await fetch(`https://petstore-des0.onrender.com/api/carts/minus/${product._id}`, { method: "DELETE", credentials: "include", })
                                const data = await res.json()
                                console.log(data);


                            } catch (error) {
                                console.log(error);


                            }
                            dispatch(subtractFromCart(product._id))
                        }}

                    >
                        -
                    </button>
                </div>
            </div>

            {/* Total Price */}
            <div className='text-lg text-gray-700 font-semibold'>
                ${totalPrice}
            </div>
            <BsTrash className='text-blue-400 cursor-pointer hover:text-red-700 ml-4'
                onClick={async () => {
                    try {
                        const res = await fetch(`https://petstore-des0.onrender.com/api/carts/delete/${product._id}`, { method: "DELETE", credentials: "include", })
                        const data = await res.json()
                        console.log(data);


                    } catch (error) {
                        console.log(error);


                    }

                }} />

        </div >
    )
}

export default CartItem  