"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Kamyar Taher",
    designation: "Web Game Engineer",
    image:
      "/ppKam.webp",
  },
  {
    id: 2,
    name: "Bastien Faivre",
    designation: "Game Systems Engineer",
    image:
      "/ppBast.webp",
  },
  {
    id: 3,
    name: "Nils Delage",
    designation: "Full-Stack Developer",
    image:
      "/ppNils.webp",
  },
  {
    id: 4,
    name: "Damien Elledge",
    designation: "Marketing Strategist",
    image:
      "/ppDam.webp",
  },
  {
    id: 5,
    name: "Hartom",
    designation: "Community Manager",
    image:
      "/ppHartom.webp",
  },
  
];

export default function Team() {
  return (
    <div>
    <div className="flex flex-row items-center justify-center w-full">
      <h1 className="text-3xl font-medium tracking-widest uppercase text-black">Our Team</h1>
    </div>
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
    </div>
  );
}
