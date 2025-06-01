import React from "react";
import Link from "next/link";

function page() {
  return (
    <div>
      <h1>Contact us page</h1>
      <br />
      <button><Link href="/">Home page</Link></button>
    </div>
  );
}

export default page;
