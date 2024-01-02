"use client"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import React from 'react'
import Sidebar from ".";
import { useSidebarStore } from "@/store/sidebar-store";
interface IMobileSidebarProps {
    isProPlan?: boolean;
    userLimitCount: number;
}
const MobileSidebar: React.FC<IMobileSidebarProps> = ({ isProPlan, userLimitCount }) => {
    const { isOpen } = useSidebarStore();
    return (
        <Sheet open={isOpen}>
            <SheetContent side="left" className="w-screen border-none bg-black p-0 pt-8">
                <SheetHeader>
                    <Sidebar
                        isProPlan={isProPlan}
                        userLimitCount={userLimitCount} />
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar