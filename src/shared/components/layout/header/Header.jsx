import Link from "next/link";

import * as styles from './header.css';

const Header = () => {
  return (
    <section className={styles.header}>
      <nav>
        <Link className={styles.link} href="/">Home</Link>
      </nav>
    </section>
  );
};

export default Header;
