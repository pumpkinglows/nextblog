"use client";
import { MDXRemote } from "next-mdx-remote";

import * as styles from "./viewer.css";

const PostViewer = ({ postData }) => {
  const MdxContainer = {
    h2: (props) => <h2 {...props} className={styles.h2} />,
    h3: (props) => <h3 {...props} className={styles.h3} />,
    p: (props) => <p {...props} className={styles.p} />,
  };

  return (
    <>
      <section className={styles.container}>
        <section className={styles.header}>
          <h1 className={styles.title}>{postData.title}</h1>
          <div className={styles.categories}>
            {postData.categories.map((category) => {
              return <div key={category}>{category}</div>;
            })}
          </div>
          <div className={styles.date}>{postData.created}</div>
        </section>
        <div>
          <MDXRemote {...postData.mdx} components={MdxContainer} />
        </div>
      </section>
    </>
  );
};

export default PostViewer;
