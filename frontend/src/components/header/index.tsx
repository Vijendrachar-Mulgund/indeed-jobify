import React from "react";

import Image from "next/image";
import Link from "next/link";

import JobifyLogo from "/public/icons/jobify_icon_32.svg";

function Header() {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
      <nav
        className="max-w-[100rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        {/* Left side of the nav bar */}
        <Link className="items-center dark:text-white" href="/">
          <Image src={JobifyLogo} alt="Jobify logo" height={32} />
        </Link>

        {/* Right side of the nav bar */}
        <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
          <a
            className="font-medium text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
            aria-current="page"
          >
            Landing
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
