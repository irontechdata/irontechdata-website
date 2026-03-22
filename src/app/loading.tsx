"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                    opacity: 1, 
                    scale: [1, 1.1, 1],
                }}
                transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative w-48 h-20 lg:w-64 lg:h-24"
            >
                <Image
                    src="/logo.png"
                    alt="Loading..."
                    fill
                    className="object-contain"
                    priority
                />
            </motion.div>
        </div>
    );
}
