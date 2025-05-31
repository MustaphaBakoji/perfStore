
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux'
import CartItem from '../components/cartItem'

import { ToggleCart } from '../redux/popUPSlice'


function Carts() {
    const carts = useSelector((state: RootState) => state.cartReducer)

    const dispatch = useDispatch()

    return (
        <div>
            <div className=' w-full  h-full  bg-white/50 fixed z-90 ' onClick={() => {
                dispatch(ToggleCart())
            }} />
            <div className='mx-[2vw] absolute top-[10vh] sm:top-24 sm:mx-[15vw]  w-[90vw] sm:w-[70vw] sm:h-[30rem] h-[24rem]  overflow-auto [scrollbar-width:none] bg-white shadow-md rounded-md border-x-2 border-green-400/30 z-100 '>
                <header className=' grid grid-cols-5   p-4 border-b-2 border-green-400/30 shadow-lg *:'>
                    <p>name</p>
                    <p>Price</p>
                    <p>quantity</p>
                    <p>Subtotal</p>

                </header>
                <div>
                    {
                        carts.map((cart) => (<CartItem totalPrice={cart.totalPrice || 5} quantity={cart.quantity} id={cart.id} product={cart.product} />))
                    }
                </div>

            </div>
        </div>
    )
}

export default Carts