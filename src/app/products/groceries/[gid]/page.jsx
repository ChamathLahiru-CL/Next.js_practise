import React from "react";

function page({ params }) {
  return <div>Groceries item {params.gid}</div>;
}

export default page;
