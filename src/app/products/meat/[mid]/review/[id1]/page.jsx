import React from "react";

function page({ params }) {
  return (
    <div>
      Meat item {params.mid} review {params.id1}{" "}
    </div>
  );
}

export default page;
