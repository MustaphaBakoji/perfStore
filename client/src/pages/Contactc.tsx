// contact.tsx
import { motion } from 'framer-motion';
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaPaw,
} from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
            {/* hero / heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto"
            >
                <h2 className="flex items-center justify-center gap-2 text-4xl font-extrabold mb-6 text-center">
                    <FaPaw className="text-green-500" />
                    Get in Touch
                </h2>
                <p className="text-gray-600 mb-10 text-center max-w-lg mx-auto">
                    Questions about products, grooming, adoptions, or anything fur-real?
                    Our team of animal lovers would love to help.
                </p>

                {/* contact details + form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* details panel */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="space-y-5 p-6 rounded-2xl bg-pink-50/50 border shadow-sm"
                    >
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-xl text-green-500" />
                            <span>support@petstore.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaPhoneAlt className="text-xl text-green-600" />
                            <span>+234 812 PET 1234</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaMapMarkerAlt className="text-xl text-blue-600" />
                            <span>12 Woof Street, Kano, Nigeria</span>
                        </div>
                        <p className="text-sm text-gray-500 pt-4">
                            Mon – Sat&nbsp;•&nbsp;9 am – 6 pm&nbsp;WAT
                        </p>
                    </motion.div>

                    {/* message form */}
                    <motion.form
                        whileHover={{ scale: 1.01 }}
                        className="space-y-4"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
                        />
                        <textarea
                            rows={4}
                            placeholder="Tell us about your furry friend..."
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
                        />
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl transition"
                        >
                            <FaPaw />
                            Send Woof!
                        </button>
                    </motion.form>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
