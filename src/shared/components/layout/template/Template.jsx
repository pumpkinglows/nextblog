import Header from "../header/Header";
import Footer from "../footer/Footer";

import * as styles from './template.css';

const Template = ({ children }) => {
  return (
    <>
      <section className={styles.container}>
        <Header />
        <article className={styles.innerWrap}>{children}</article>
        <Footer />
      </section>
    </>
  );
};

export default Template;
