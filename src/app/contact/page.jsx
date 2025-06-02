import React from "react";
import Link from "next/link";
import styles from "./contactUs.module.css";

function page() {
  return (
    <>
    <h1>Contact us page</h1>
      <br />
      <button><Link href="/"className={styles.link}>Home page</Link></button>
    </>
      
    
  );
}

export default page;
