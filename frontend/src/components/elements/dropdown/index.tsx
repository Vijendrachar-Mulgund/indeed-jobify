"use client";

import React, { useState } from "react";

interface DropdownProps {
  buttonType: string;
}

function Dropdown({ buttonType }: DropdownProps) {
  const [openState, setOpenState] = useState(false);

  const toggleDropdown = () => {
    setOpenState((prevState) => !prevState);
  };

  return (
    <details onClick={toggleDropdown} className="dropdown" open={openState}>
      <summary className="m-1">open or close</summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </details>
  );
}

export default Dropdown;
