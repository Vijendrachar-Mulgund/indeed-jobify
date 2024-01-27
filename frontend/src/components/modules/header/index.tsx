import React from "react";
import Image from "next/image";

import JobifyLogo from "/public/icons/jobify_icon_32.svg";
import Link from "next/link";

import { ModeToggle } from "../theme-provider";

function Header() {
  return (
    <header>
      <nav className="bg-secondary py-2.5 lg:px-6">
        <div className="mx-auto my-1 flex max-w-[90rem] flex-wrap items-center justify-between ">
          {/* Left hand side */}
          <div>
            <Link href={"/"}>
              <Image
                className="dark:invert"
                src={JobifyLogo}
                alt="Jobify Logo"
              />
            </Link>
          </div>

          {/* Right hand side */}
          <div className="flex flex-row items-center">
            <div className="ml-3">
              <Link href={"/dashboard"}>Dashboard</Link>
            </div>

            <div className="ml-3">
              {/* Theme switcher Icon */}
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
