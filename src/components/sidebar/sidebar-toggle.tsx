"use client"

import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/sidebar-store"
import Image from "next/image";
import menuOpen from "@/public/menu-open.svg";
import menuClose from "@/public/menu-close.svg";
import { Button } from "../ui/button";
import { X } from "lucide-react";
const SidebarToggle = () => {
  const { isMinimal, handleOpenOrClose, handleChangeSidebar } = useSidebarStore();
  return (
    <div>
      <div
        className="cursor-pointer hidden lg:block"
        is-navbar-minimal={isMinimal ? "true" : undefined}
        onClick={handleChangeSidebar}>
        <Image src={isMinimal ? menuOpen : menuClose} alt="navbar icon" width={24} height={24} />
      </div>
      <Button
        variant="ghost"
        className="lg:hidden"
        onClick={handleOpenOrClose}
        size="icon">
        <X />
      </Button>
    </div>
  )
}

export default SidebarToggle