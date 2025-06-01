import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <><div className={styles.page}>
      <h1>Home Page</h1>
      <h3>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Service</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="about">About</Link></li>
          <li><Link href="contact">Contact us</Link></li>
          <li><Link href="/about/branches">Branches</Link></li>
          <br />
          <li><Link href="https://nextjs.org/" target='_blank'>NextJS Site</Link></li>
      </ul>
      </h3>
      
    </div>
    </>
  );
}
