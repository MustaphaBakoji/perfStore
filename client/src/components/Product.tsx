// src/components/ProductCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';

// Interface for Product data (same as before)
interface Product {
    id: string | number;
    imageUrl?: string;
    name: string;
    price: number;
    description?: string;
    altText?: string;
}

// Interface for Component Props (same as before)
interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { imageUrl, name, price, description, altText, id } = product;

    // --- UI Enhancement: Refined Framer Motion Variants ---
    const cardVariants = {
        rest: {
            scale: 1,
            // Matches Tailwind's shadow-lg more closely
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } // Smoother easing
        },
        hover: {
            scale: 1.03,
            // Matches Tailwind's shadow-xl more closely
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } // Smoother easing
        }
    };

    if (!product) {
        console.error("ProductCard requires a valid product prop.");
        return null;
    }
    const dispatch = useDispatch()
    return (
        // --- UI Enhancement: Added 'group' for image hover effect, softer rounding ---
        <motion.div
            className="group bg-white rounded-xl overflow-hidden w-full max-w-sm mx-auto flex flex-col" // Use flex-col to ensure button stays at bottom
            variants={cardVariants}
            initial="rest"
            whileHover="hover"
            animate="rest"
            layout // Add layout prop for smoother animations if size changes

        >
            {/* Product Image Container */}
            {/* --- UI Enhancement: Fixed aspect ratio, subtle zoom on group hover --- */}
            <div className="relative w-full aspect-square overflow-hidden"> {/* Changed to aspect-square for consistency */}
                <img
                    src={imageUrl || '/placeholder-image.jpg'}
                    alt={altText || `Image of ${name}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" // Image zoom effect
                />
            </div>

            {/* Product Details */}
            {/* --- UI Enhancement: Increased padding, refined text styles and spacing --- */}
            <div className="p-5 md:p-6 flex flex-col flex-grow"> {/* Added flex-grow to push button down */}

                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate"> {/* Darker text, tighter margin */}
                    {name || 'Product Name'}
                </h3>

                {/* Product Price */}
                <p className="text-xl font-bold text-indigo-600 mb-3"> {/* Slightly larger price */}
                    {price !== undefined ? `$${price.toFixed(2)}` : '$0.00'}
                </p>

                {/* Product Description (Optional) */}
                {description && (
                    <p className="text-sm text-gray-500 mb-5 leading-relaxed line-clamp-3 flex-grow"> {/* Lighter text, more line height, increased margin, flex-grow */}
                        {description}
                    </p>
                )}
                {/* If no description, add spacer to push button down */}
                {!description && <div className="flex-grow mb-5"></div>}

                {/* Action Button */}
                {/* --- UI Enhancement: Softer rounding, refined hover/focus, icon placeholder --- */}
                <motion.button
                    className="mt-auto w-full inline-flex items-center justify-center bg-emerald-500 text-white font-medium py-2.5 px-4 rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-200 ease-in-out" // Added mt-auto, justify-center, slightly more padding, adjusted rounding/focus
                    whileTap={{ scale: 0.97 }}
                // onClick={() => handleAddToCart(id)}
                >
                    {/* Icon Placeholder (e.g., using Heroicons) */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
             <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
           </svg> */}
                    Add to Cart
                </motion.button>
            </div>
        </motion.div>
    );
};

export { ProductCard };