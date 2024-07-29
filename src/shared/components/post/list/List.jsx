import Link from "next/link";

import * as styles from "./list.css";

const PostList = ({ postList }) => {
  return (
    <section className={styles.container}>
      {postList.map((post) => {
        return (
          <div key={post.slug} className={styles.post}>
            <Link href={`/post/${post.slug}`} className={styles.title}>
              {post.title}
            </Link>
            <div className={styles.description}>{post.description}</div>
            <div className={styles.date}>{post.date}</div>
          </div>
        );
      })}
    </section>
  );
};

export default PostList;
