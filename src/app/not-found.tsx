"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-6"
            >
                <h1 className="text-9xl font-extrabold text-[#126299] tracking-tighter">
                    404
                </h1>
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl font-bold text-black uppercase tracking-widest">
                        Page Not Found
                    </h2>
                    <p className="text-[#126299]/70 max-w-md mx-auto text-lg font-medium italic">
                        The page you are looking for might have been moved, renamed, or is temporarily unavailable.
                    </p>
                </div>
                
                <Button 
                    asChild
                    className="mt-8 rounded-full bg-[#126299] hover:bg-[#0f5280] py-6 px-10 text-lg font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:scale-105"
                >
                    <Link href="/">Back to Home</Link>
                </Button>
            </motion.div>
        </div>
    );
}
