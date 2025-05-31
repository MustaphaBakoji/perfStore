
import { BsCart, BsSearch } from "react-icons/bs";
import { FaBars, FaPlus, FaTimes, FaUser, FaUserLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { ToggleCart, ToggleLogin, ToggleSignUp } from "../redux/popUPSlice";
import { RootState } from "../redux";
import { LiaUserShieldSolid } from "react-icons/lia";
import { setAddProduct } from "../redux/admin";
import { NavLink } from "react-router-dom";
import { searchProduct } from "../redux/productsSlice";
function Nav() {


    // Function to toggle the sidebar  

    const dispatch = useDispatch()
    const { user } = useSelector((state: RootState) => (state.userReducer))
    const { admin } = useSelector((state: RootState) => (state.adminReducer))

    const cartLength = useSelector((state: RootState) => (state.cartReducer.length))


    return (
        <>
            <header className='sm:border-b-[1px] sm:border-green-400/30 sm:h-14 w-[100%] mb-3 bg-white/90 fixed z-20 top-0 right-0'>
                <nav className='webNav flex justify-between items-center px-4'>
                    <h1 className='text-green-400/30 font-mono text-lg font-bold sm:font-medium  sm:text-3xl flex'>
                        {
                            // Animated Logo  
                            ["B", "a", "k", "o", "P", "e", "t"].map((letter, index) => (
                                <motion.p
                                    key={index}
                                    initial={{ x: index % 2 === 0 ? -200 : 200, rotate: 180 }}
                                    animate={{ x: 0, rotate: 0 }}
                                    transition={{ duration: 1.5 }}
                                >
                                    {letter}
                                </motion.p>
                            ))
                        }
                    </h1>
                    <div className='border-[1px] w-48 h-10 border-green-400/30 rounded-lg flex justify-between items-center px-2 sm:w-72'>
                        <input
                            type="text"
                            className='w-40 h-8 rounded-lg pl-2 outline-none'
                            placeholder='Search...'
                            onChange={(e) => {
                                console.log(e.target.value);

                                dispatch(searchProduct(e.target.value))
                            }}
                        />
                        <BsSearch />
                    </div>
                    <div className='hidden sm:flex justify-between w-[20%] '>
                        <NavLink to={'/about'} className=''><span>about</span> </NavLink>
                        <p className=''><span>our services</span> </p>
                        <NavLink to={"/contact"} className=''><span className=" ">contactUs </span> </NavLink>
                    </div>
                    <div className="flex relative mr-10">
                        {admin ? <LiaUserShieldSolid className=" w-10 h-10 px-1 text-green-400" /> : user ? <FaUser className=" w-8 h-8 px-1 text-green-400" /> : <FaUserLock className=" w-8 h-8 px-1 text-green-400" onClick={() => { dispatch(ToggleSignUp()) }} />}
                        {admin ? <FaPlus className=" w-5 h-5 font-bold sm:w-8 sm:h-8 text-green-400" onClick={() => {
                            console.log("add product");

                            dispatch(setAddProduct())
                        }} /> : user ? <> <BsCart className=" w-8 h-8  text-green-400"
                            onClick={() => {
                                dispatch(ToggleCart())
                            }}
                        />
                            <span className=" absolute right-2 top-0.5 ">{cartLength < 99 ? cartLength : "99+"}</span></> : ""
                        }

                    </div>
                </nav>
            </header>

            {/* Mobile Sidebar */}

        </>
    );
}

export default Nav;  