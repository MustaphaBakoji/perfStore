import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { shuffle } from '../utils/shuppler'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/productsSlice'
import { MdLogout } from 'react-icons/md'
import { logOut } from '../redux/userSlice'
import { RootState } from '../redux'

function NavItems() {
    const dispatch = useDispatch()
    const animals: string[] = ["cats", "dogs", "fish", "birds"]
    const { user } = useSelector((state: RootState) => (state.userReducer))
    const { admin } = useSelector((state: RootState) => (state.adminReducer))

    const [food, setfood] = useState<boolean>(false)
    const [accessories, setaccessories] = useState<boolean>(false)
    const [toys, settoys] = useState<boolean>(false)
    const CategoryNavHandler = (e: React.MouseEvent<HTMLElement>) => {
        const element = e.target as HTMLElement
        const { id } = element

        if (id === 'toys') {
            settoys(prev => !prev)

        }
        if (id === 'accessories') {
            setaccessories(prev => !prev)
        }
        if (id === "food") {
            setfood(prev => !prev)
        }
        console.log(toys, food, accessories);





    }
    return (
        <nav className='flex flex-col mt-4'>
            <p className='flex items-center py-2' onClick={CategoryNavHandler} id='food'><span>Food</span>{food ? <FaChevronUp /> : <FaChevronDown />}</p>
            {food && animals.map((animal) => (<p className='flex'
                onClick={async () => {
                    try {

                        const response = await fetch(`https://petstore-des0.onrender.com/api/products/food/${animal}`)

                        if (response.ok) {
                            let data = await response.json()
                            data = shuffle(data.data)

                            dispatch(setProducts(data))
                            console.log(data);


                        }


                    } catch (error) {
                        console.log(error);

                    }

                }}


            >{animal}</p>))}
            <p className='flex items-center py-2' onClick={CategoryNavHandler} id='toys'><span>Toys</span>{toys ? <FaChevronUp /> : <FaChevronDown />}</p>
            {toys && animals.map((animal) => (<p className='flex'
                onClick={async () => {
                    try {

                        const response = await fetch(`https://petstore-des0.onrender.com/api/products/toys/${animal}`)

                        if (response.ok) {
                            let data = await response.json()
                            data = shuffle(data.data)

                            dispatch(setProducts(data))
                            console.log(data);


                        }


                    } catch (error) {
                        console.log(error);

                    }

                }}

            >{animal}</p>))}
            <p className='flex items-center py-2' onClick={CategoryNavHandler} id='accessories'><span>Accessories</span>{accessories ? <FaChevronUp /> : <FaChevronDown />}</p>
            {accessories && animals.map((animal) => (<p className='flex'
                onClick={async () => {
                    try {

                        const response = await fetch(`https://petstore-des0.onrender.com/api/products/accessories/${animal}`)

                        if (response.ok) {
                            let data = await response.json()
                            data = shuffle(data.data)

                            dispatch(setProducts(data))
                            console.log(data);


                        }


                    } catch (error) {
                        console.log(error);

                    }

                }}


            >{animal}</p>))}
            {(user || admin) && <span className=' flex mt-10 items-center '
                onClick={() => {
                    fetch("https://petstore-des0.onrender.com/api/users/logout").then(() => {
                        dispatch(logOut())
                    }).catch((e) => {
                        console.log(e);

                    })

                }}> <MdLogout className=' text-green-500 w-8 h-8 mr-2' /> <p>logout</p></span>}
        </nav>
    )
}

export default NavItems