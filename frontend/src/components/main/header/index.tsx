// Next & React imports
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Component Imports
import ThemeSelector from "@/components/main/theme-selector";

// Misc Imports
import JobifyLogo from "/public/icons/jobify_icon_32.svg";

function Header() {
  return (
    <header className="navbar bg-base-100">
      <div className="mx-auto h-full w-full max-w-[100rem]">
        {/* Left section */}
        <div className="flex-1">
          <Link href={"/"} className="btn btn-ghost text-xl">
            <Image src={JobifyLogo} alt="Jobify Logo" />
            Jobify
          </Link>
        </div>

        {/* Right section */}
        <div className="flex-row items-center">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/"}>Link</Link>
            </li>

            {/* Theme Selector */}
            <li>
              <ThemeSelector />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
