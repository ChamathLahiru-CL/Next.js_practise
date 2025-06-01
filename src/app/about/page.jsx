import React from "react";
import Link from "next/link";

function page() {
  return (
    <div>
      <h1>About us page</h1>

      <button><Link href="/">Home page</Link></button>
    </div>
  );
}

export default page;
