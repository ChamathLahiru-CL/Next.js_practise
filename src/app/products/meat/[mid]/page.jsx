import React from "react";
import Link from "next/link";

function page({ params }) {
  return (
     <>
    <div>Meat items {params.mid}</div>

    <button><Link href="/products/meat">Home page</Link></button>
  
  </>
  )
  
 
}

export default page;
