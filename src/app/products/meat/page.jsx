import React from "react";
import Link from "next/link";

function page() {
  return (
  <>
    <h1>Meats menu</h1>

    <br />
    <ul>
      <li>
        <Link href="/products/meat/beef">Beef</Link>
      </li>
      <li>
        <Link href="/products/meat/chicken">chicken</Link>
      </li>
      <li>
        <Link href="/products/meat/cow">Cow</Link>
      </li>
      <li>
        <Link href="/products/meat/dog">Dog</Link>
      </li>
    </ul>
    <button><Link href="/products">Products page</Link></button>
  </>)
  
  
}

export default page;
