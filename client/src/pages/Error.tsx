import { motion } from 'framer-motion';
import { errorType } from '../types/errorType';
import { useDispatch } from 'react-redux';
import { hideError } from '../redux/errorSlice';
export default function Error(props: errorType) {
    const { message, statusCode } = props
    const dispatch = useDispatch()
    return (
        <div className="fixed inset-0 z-[150] bg-gradient-to-br from-red-400/10 via-red-300/10 to-green-200/30 flex items-center justify-center p-4"
            onClick={() => {
                dispatch(hideError())
            }}
        >
            <motion.div

                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 w-lg text-center h-3/4 place-items-center grid grid-cols-1"
            >
                <h1 className="text-6xl font-extrabold text-green-600 mb-4">{statusCode}</h1>
                <h2 className="text-2xl font-semibold mb-2 text-green-700">   {message}</h2>
                <p className="text-gray-600 mb-6">
                    Error
                </p>
                <span

                    className="inline-block bg-green-400 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-300 transition"
                >
                    Go Home
                </span>
            </motion.div>
        </div>
    );
}