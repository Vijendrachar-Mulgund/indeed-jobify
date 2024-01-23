import React from "react";
import Image from "next/image";
import NotfoundImage from "/public/images/page-not-found.svg";

function NotFound() {
  return (
    <main className="flex h-screen items-center justify-center">
      <Image src={NotfoundImage} alt="not-found" className="h-96"></Image>
      This page could not be found
    </main>
  );
}

export default NotFound;
