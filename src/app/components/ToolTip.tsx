
import React, { useState, useRef } from "react";

// framer motion
import { motion, AnimatePresence, useMotionValue } from "framer-motion";

// react icons
import { FaFacebook, FaGithub } from "react-icons/fa";
import Link from "next/link";

const BasicSwipeCard = () => {
    const [isLeftRevealed, setIsLeftRevealed] = useState(false);
    const [isRightRevealed, setIsRightRevealed] = useState(false);
    const x = useMotionValue(0);
    const isDragging = useRef(false);

    const handleDragEnd = () => {
        const xValue = x.get();
        isDragging.current = false;

        if (xValue < -40) {
            setIsRightRevealed(true);
            setIsLeftRevealed(false);
        } else if (xValue > 40) {
            setIsLeftRevealed(true);
            setIsRightRevealed(false);
        } else {
            setIsLeftRevealed(false);
            setIsRightRevealed(false);
        }
    };

    const resetCard = () => {
        setIsLeftRevealed(false);
        setIsRightRevealed(false);
        x.set(0);
    };

    const handleAction = (action: string) => {
        console.log(`Executing action: ${action}`);
        resetCard();
    };

    return (
        <div className="flex items-center justify-center w-11/12 md:w-1/4 max-w-md mx-auto">
            <div className="relative w-full overflow-hidden bg-whtie rounded-md shadow-[2px_1px_15px_rgba(0,0,0,0.07)]">

                {/* Left Actions */}
                <div
                    className="absolute top-0 left-0 h-full flex items-center justify-start pl-[19px] bg-blue-600 w-1/3">
                   
                    <Link href={"https://facebook.com/nmcsakib.2"}
                        target="_blank"
                        onClick={() => handleAction("Mark as Read")}
                        className="p-2 mr-1 bg-blue-400/70 text-white rounded-full cursor-pointer"
                    >
                        <FaFacebook className="text-[1.5rem]" />
                    </Link>
                   
                </div>

                {/* Right Actions */}
                <div
                    className="absolute top-0 right-0 h-full flex items-center justify-end pr-[19px] bg-gray-500 w-1/3">
                    
                    <Link href={"https://github.com/nmcsakib"}
                        target="_blank"
                        onClick={() => handleAction("Delete")}
                        className="p-2 bg-gray-700 text-white rounded-full"
                    >
                        <FaGithub className="cursor-pointer text-[1.5rem]" />
                    </Link>
                    
                </div>

                {/* Main Card */}
                <AnimatePresence initial={false}>
                    <motion.div
                        className="bg-white dark:bg-slate-800 px-5 py-3 w-full z-10 relative"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragStart={() => (isDragging.current = true)}
                        onDragEnd={handleDragEnd}
                        initial={{ x: 0 }}
                        animate={{
                            x: isLeftRevealed ? 80 : isRightRevealed ? -80 : 0,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 250,
                            damping: 25,
                        }}
                        style={{ x }}
                    >
                        <div
                            className="flex items-center cursor-grab active:cursor-grabbing"
                            onClick={() => {
                                if (!isDragging.current) resetCard();
                            }}
                        >
                            <div
                                className="h-10 w-10 bg-gray-300 dark:bg-slate-900 dark:text-[#abc2d3] rounded-full flex items-center justify-center text-gray-600 font-bold text-sm">
                                S
                            </div>
                            <div className="ml-3 flex-grow">
                                <h3 className="text-base dark:text-[#d2e5f5] font-medium text-gray-800">NMC SAKIB</h3>
                                <p className="text-gray-600 text-xs dark:text-[#abc2d3]">Swipe to see informations</p>
                            </div>
                            <div className="text-gray-500 dark:text-[#abc2d3] text-xs">Developer</div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default BasicSwipeCard;
