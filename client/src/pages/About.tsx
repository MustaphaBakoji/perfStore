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
                    About Our Perf store
                </h1>
                <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                    Welcome to our fragrance sanctuary, where we curate an exquisite collection of perfumes that tell unique stories through scent. From timeless classics to contemporary creations, we're dedicated to helping you discover the perfect fragrance that resonates with your personality and style.
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
                            Founded in 2023, our perfume store began with a simple idea — make high-quality fragrances accessible to everyone.
                            We've grown from a small boutique to a trusted destination for perfume enthusiasts.
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
                            From niche boutique fragrances to designer classics, we offer a carefully curated selection
                            of authentic perfumes, along with expert guidance to help you find your signature scent.
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
                            We are committed to quality and authenticity. Every fragrance in our collection is carefully
                            sourced from renowned perfume houses and verified for authenticity to ensure your complete satisfaction.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
