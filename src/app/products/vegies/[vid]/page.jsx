import React from "react";
import Link from "next/link";

function page({ params }) {
  return (
    <>
      <div>Vegies items {params.vid}</div>

     <button><Link href="/products/vegies">Menu page</Link></button>
    </>
  )
  
    
  
}

export default page;
