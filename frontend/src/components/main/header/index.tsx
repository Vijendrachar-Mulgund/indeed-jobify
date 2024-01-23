import React from "react";

import Image from "next/image";
import Link from "next/link";

import JobifyLogo from "/public/icons/jobify_icon_32.svg";

const themes = [
  { label: "Dark", icon: "", value: "forest" },
  { label: "Light", icon: "", value: "pastel" },
];

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
              <details className="dropdown">
                <summary>Theme</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  {themes?.map((theme) => {
                    return (
                      <div className="btn btn-sm my-1 rounded font-normal hover:cursor-pointer">
                        {theme?.label}
                      </div>
                    );
                  })}
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
