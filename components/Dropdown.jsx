"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Dropdown = ({data,setOpenMenu}) => {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger><FaChevronDown className="text-slate-500" /></DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-[200px] overflow-auto bg-slate-100">
        {
          data.map((item, index) => (
            <DropdownMenuItem key={index} className="py-4" onClick={() => setOpenMenu(false)}>
              {item.link ? <Link href={item.value} className={pathname === item.value ? "text-blue-700 border-b-blue-400" : ""}>{item.label}</Link> : <span>{item.label}</span>}
            </DropdownMenuItem>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
