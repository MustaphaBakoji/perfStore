import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdLogout } from 'react-icons/md'
import { FaChevronRight } from 'react-icons/fa'
import { shuffle } from '../utils/shuppler'
import { setProducts } from '../redux/productsSlice'
import { logOut } from '../redux/userSlice'
import { RootState } from '../redux'

const categories = ['perfumes', 'spray', 'deodorants']
const BASE_URL = 'https://perfstore.onrender.com'

function NavItems() {
    const dispatch = useDispatch()
    const { user } = useSelector((state: RootState) => state.userReducer)
    const { admin } = useSelector((state: RootState) => state.adminReducer)

    const handleCategoryClick = async (category: string) => {
        try {
            const res = await fetch(`${BASE_URL}/api/products/${category}`)
            if (res.ok) {
                let data = await res.json()
                data = shuffle(data.data)
                dispatch(setProducts(data))
            } else {
                console.error(`Failed to fetch ${category} products`)
            }
        } catch (err) {
            console.error(err)
        }
    }

    const handleLogout = () => {
        fetch(`${BASE_URL}/api/users/logout`)
            .then(() => dispatch(logOut()))
            .catch(console.error)
    }

    return (
        <nav className='flex flex-col mt-4'>
            {categories.map(category => (
                <p
                    key={category}
                    className='flex items-center py-2 cursor-pointer hover:underline capitalize'
                    onClick={() => handleCategoryClick(category)}
                >
                    <FaChevronRight className='mr-2' />
                    {category}
                </p>
            ))}
            {(user || admin) && (
                <span
                    className='flex mt-10 items-center cursor-pointer hover:text-red-500'
                    onClick={handleLogout}
                >
                    <MdLogout className='text-green-500 w-8 h-8 mr-2' />
                    <p>Logout</p>
                </span>
            )}
        </nav>
    )
}

export default NavItems
