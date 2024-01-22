import React from "react";
import Image from "next/image";
import Notfound from "../../public/images/page-not-found.svg";

function NotFound() {
  return (
    <main>
      <Image src="/images/page-not-found.svg" alt="not-found" width="100" height="100"></Image>
      NotFound Test Two
    </main>
  );
}

export default NotFound;
