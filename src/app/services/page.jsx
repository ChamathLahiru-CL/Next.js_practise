import React from "react";
import Link from "next/link";

function page() {
  return (
    <>
      <h1>Service page</h1>

      <button><Link href="/">Home page</Link></button>
    </>
  );
}

export default page;
