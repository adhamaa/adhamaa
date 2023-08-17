import React from "react";
import { ModeToggle } from "./ui/mode-toggle";

function Navbar() {
  return (
    <nav className="container m-4 px-10 w-full h-auto fixed top-0 flex items-center justify-end">
      <ModeToggle />
    </nav>
  );
}

export default Navbar;
