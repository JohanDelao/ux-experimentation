"use client"

import { useScrollTop } from "@/hooks/use-scroll-top";
import clsx from "clsx"
import { useState } from "react"

export const Navbar = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const scrolled = useScrollTop();

    return (
        <div className="fixed top-2 h-14 w-full">
            {/* change bg when scrolls */}
            <div className={clsx("h-full max-w-4xl rounded-full mx-auto flex items-center px-8 transition-colors duration-300", scrolled ? "bg-slate-300 text-black" : "text-white")}>
                <ul className="w-full flex justify-between items-center no-underline py-2">
                    <li className={clsx("rounded-full py-2 px-5", activeTab === "Home" ? "bg-slate-100" : "")}>Home</li>
                    <li className={clsx("rounded-full py-2 px-5", activeTab === "About" ? "bg-slate-100" : "")}>About</li>
                    <li className={clsx("rounded-full py-2 px-5", activeTab === "Contact" ? "bg-slate-100" : "")}>Contact</li>
                    <li className={clsx("rounded-full py-2 px-5", activeTab === "Projects" ? "bg-slate-100" : "")}>Projects</li>
                    <li className={clsx("rounded-full py-2 px-5", activeTab === "Experience" ? "bg-slate-100" : "")}>Experience</li>
                </ul>
            </div>
        </div>
    )
}