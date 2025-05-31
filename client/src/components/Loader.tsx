import React from 'react';
import { motion } from 'framer-motion';

function Loader() {
    // Container variants for staggering the child animations
    const containerVariants = {
        initial: {
            transition: {
                staggerChildren: 0.1 // Stagger the animation of child elements
            }
        },
        animate: {
            transition: {
                staggerChildren: 0.1 // Stagger the animation of child elements
            }
        }
    };

    // Variants for the individual dots
    const dotVariants = {
        initial: {
            y: "0%" // Initial vertical position
        },
        animate: {
            y: "100%" // Animate down
        }
    };

    // Variants for the rotating container
    const rotateVariants = {
        initial: {
            rotate: 0 // Start with no rotation
        },
        animate: {
            rotate: 360, // Rotate 360 degrees
            transition: {
                duration: 2, // Duration of one full rotation
                ease: "linear", // Linear easing for constant speed
                repeat: Infinity // Repeat infinitely
            }
        }
    };


    return (
        // Container for the loader, centered on the screen
        <div className="flex items-center justify-center h-screen bg-white/60">
            {/* Outer container for rotation */}
            <motion.div
                className="flex w-24 h-24 relative" // Adjust size as needed
                variants={rotateVariants}
                initial="initial"
                animate="animate"
            >

                <motion.div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full" // Top dot
                    variants={dotVariants}
                    initial="initial"
                    animate="animate"
                    transition={{
                        duration: 0.8, // Duration for dot movement
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                ></motion.div>

                <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full" // Bottom dot
                    variants={dotVariants}
                    initial="initial"
                    animate="animate"
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 0.4 // Stagger delay
                    }}
                ></motion.div>
                <motion.div
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-purple-500 rounded-full" // Left dot
                    variants={dotVariants}
                    initial="initial"
                    animate="animate"
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 0.2 // Stagger delay
                    }}
                ></motion.div>
            </motion.div>
        </div>
    );
}

export default Loader;
