"use client";
import React from "react";

function page({ params }) {
  console.log(params);

  return (
    <>
      <div>Catch All routes</div>
      <br />
      <ul>
        {params.dpath.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default page;
