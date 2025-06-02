import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <><div className={styles.page}>
      <h1>Home Page</h1>
      <h3>
        <ul>
          <li><Link href="/" className={styles.link}>Home</Link></li>
          <li><Link href="/services"className={styles.link}>Service</Link></li>
          <li><Link href="/products"className={styles.link}>Products</Link></li>
          <li><Link href="about"className={styles.link}>About</Link></li>
          <li><Link href="contact"className={styles.link}>Contact us</Link></li>
          <li><Link href="/about/branches"className={styles.link}>Branches</Link></li>
          <br />
          <li><Link href="https://nextjs.org/" target='_blank'id={styles.specialLink}>NextJS Site</Link></li>
      </ul>
      </h3>
      
    </div>
    </>
  );
}
