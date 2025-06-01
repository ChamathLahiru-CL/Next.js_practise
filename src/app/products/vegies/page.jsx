import React from "react";
import Link from "next/link";

function page(){

  const vegie = [
    {
      id: 1,
      name: "Carrot",
      price: 50,
    },
    {
      id: 2,
      name: "Potato",
      price: 30,
    },
    {
      id: 3,
      name: "Tomato",
      price: 20,
    }
  ]

    return (
      <>
    <h1>Vergies menu</h1><br />

    <ul>
      {vegie.map((vegies) => {
        return <li key={vegies.id}>
          <Link href={`/products/vegies/${vegies.name}`}>
            {vegies.name} - Rs.{vegies.price}
          </Link>
        </li>

      }
      )}
    </ul>
    <br />
    <button><Link href="/products">Products page</Link></button>
    </>

    )
    
    


}


  


export default page;
