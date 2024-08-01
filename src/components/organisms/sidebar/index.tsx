'use client'

import { cn } from "@/lib/utils"
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { useState } from "react"

interface IProps {
    className?: string,
    openSidebar: boolean
}

const Sidebar = () => {
    const [openSidebar, setOpenSidebar] = useState<boolean>(true);

    return (
        <div className={cn("h-full ease-out duration-500 py-4 bg-blue-800 px-4 text-white", openSidebar ? "w-[210px]" : "w-[80px]")}>
            <div className="w-full relative h-full">
                <button className="absolute -right-9 top-0 bg-white text-black p-1 z-10 rounded-full ease-out duration-500" onClick={() => setOpenSidebar(!openSidebar)}>
                    {openSidebar ? (
                        <ChevronsLeft/>
                    ) : (
                        <ChevronsRight/>
                    )}
                </button>
                <div>
                    <p>Logo</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar