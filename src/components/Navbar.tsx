import React from "react";
import { ModeToggle } from "./ui/mode-toggle";
import Link from "next/link";

function Navbar() {
  return (
    <header className="sticky top-0 z-20 container py-2 m-4 w-full bg-zinc-400/40 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-x border-zinc-300/10 firefox:bg-opacity-90">
      <div className="mx-auto">
        <nav className="flex items-center justify-between">
          <span className="text-2xl text-gray-900 font-semibold">Logo</span>
          <ul className="flex gap-4">
            <li className="">
              <Link href="/">Home</Link>
            </li>
            <li className="">
              <Link href="/about">About</Link>
            </li>
          </ul>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
