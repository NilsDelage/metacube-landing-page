"use client";
import React from "react";
import { FloatingNav } from "../ui/navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function Navbar() {
  const navItems = [
    {
      name: "About",
      link: "https://metacube-1.gitbook.io/metacube/",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative left-1/2">
      <FloatingNav navItems={navItems} />
    </div>
  );
}