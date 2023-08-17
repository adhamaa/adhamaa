import React from "react";
import { ModeToggle } from "./ui/mode-toggle";

function Navbar() {
  return (
    <header className="container m-4 px-10 w-full h-auto fixed top-0 flex items-center justify-end">
      <nav>
        <ModeToggle />
      </nav>
    </header>
  );
}

export default Navbar;
