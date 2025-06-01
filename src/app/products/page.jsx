import React from "react";
import Link from "next/link";

function page() {
  return (
    <>
    <div>
      <h1>Products page</h1>
      <br />
      <ul>
        <li>
          <Link href="/products/vegies">Vegies</Link>
        </li>
        <li>
          <Link href="/products/meat">Meats</Link>
        </li>
        <li>
          <Link href="/products/groceries">Groceries</Link>
        </li>
        </ul>
      <button><Link href="/">Home page</Link></button>
    </div>
    </>
    
  )
}

export default page;
