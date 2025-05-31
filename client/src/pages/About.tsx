// about.tsx
import { motion } from 'framer-motion';
import { FaPaw, FaDog, FaCat, FaStore } from 'react-icons/fa';

const About = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto text-center"
            >
                <h1 className="flex justify-center items-center gap-2 text-4xl font-bold mb-4">
                    <FaPaw className="text-green-500" />
                    About Our Pet Store
                </h1>
                <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                    Welcome to our paw-some pet store! We’re more than just a shop — we’re a community of animal lovers
                    dedicated to helping pets live happier, healthier lives. From wagging tails to purring companions,
                    we’re here to support every step of your pet journey.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Our Story */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-6 rounded-2xl shadow-md border bg-green-50 hover:shadow-xl transition"
                    >
                        <FaStore className="text-green-500 text-4xl mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">Our Story</h3>
                        <p className="text-gray-700">
                            Founded in 2020, our store began with a simple idea — make high-quality pet care accessible and fun.
                            We’ve grown from a tiny corner shop to a thriving pet community hub.
                        </p>
                    </motion.div>

                    {/* What We Offer */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-6 rounded-2xl shadow-md border bg-green-50 hover:shadow-xl transition"
                    >
                        <FaDog className="text-green-500 text-4xl mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">What We Offer</h3>
                        <p className="text-gray-700">
                            Toys, treats, grooming products, pet food, accessories, and expert advice — all tailored for your furry
                            friends, whether they bark, purr, or chirp!
                        </p>
                    </motion.div>

                    {/* Our Promise */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-6 rounded-2xl shadow-md border bg-green-50 hover:shadow-xl transition"
                    >
                        <FaCat className="text-green-500 text-4xl mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">Our Promise</h3>
                        <p className="text-gray-700">
                            We care deeply about your pets. That’s why we only offer trusted brands, responsible sourcing,
                            and personalized service to meet every tail-wagging need.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
