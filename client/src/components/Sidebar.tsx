import { motion } from 'framer-motion'

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavItems from './NavItems';
function Sidebar() {



    const [isOpen, setIsOpen] = useState<boolean>(false);


    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Sidebar animation variants  
    const sidebarVariants = {
        open: { x: 0 },
        closed: { x: '-100%' }
    };
    return (
        <div className='w-56 h-screen  border-green-400/30 border-0 sm:border-r-[1px] sm:fixed'>

            <button onClick={toggleSidebar} className="text-xl sm:hidden fixed  right-5 top-3 z-100">
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className=' hidden sm:block'>
                <NavItems />
            </div>
            <motion.div
                className='fixed top-0 left-0 w-3/4 h-full bg-white shadow-md z-50 p-4  '
                initial='closed'
                animate={isOpen ? 'open' : 'closed'}
                variants={sidebarVariants}
                transition={{ type: 'spring', stiffness: 300 }}
            >


                <NavItems />
                <button onClick={toggleSidebar} className='mt-4 text-blue-500'>Close</button>
            </motion.div>
        </div>
    )
}

export default Sidebar