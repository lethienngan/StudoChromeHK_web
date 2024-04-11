import { FaArrowRight } from "react-icons/fa";

import styles from "./Blog.module.scss";
function Blog() {
    return (
        <section className={styles.blog}>
            <div className={styles.contentContainer}>
                <div className={styles.greeting}>
                    <li>SHARING</li>
                </div>
                <div className={styles.name}>
                    <h1>OUR BLOGS</h1>
                    <p>
                        Choose the course you prefer (depending on availability). Choose from a variety of sizes and
                        styles. Lorem ipsum viverra tristique justo duis vitae diaminte neque nivamus aestan artines in
                        the nedana mis erodino fermen.
                    </p>
                </div>
            </div>
            <div className={styles.blogContainer}>
                <figure className={styles.item}>
                    <img src="https://duruthemes.com/demo/html/patara/onepage-light/img/news/1.jpg" alt="" />
                    <h1>Title here</h1>
                    <a href="" className={styles.blogIcon}>
                        <FaArrowRight />
                    </a>
                </figure>
                <figure className={styles.item}>
                    <img src="https://duruthemes.com/demo/html/patara/onepage-light/img/news/2.jpg" alt="" />
                    <h1>Title here</h1>
                    <a href="" className={styles.blogIcon}>
                        <FaArrowRight />
                    </a>
                </figure>
                <figure className={styles.item}>
                    <img src="https://duruthemes.com/demo/html/patara/onepage-light/img/news/3.jpg" alt="" />
                    <h1>Title here</h1>
                    <a href="" className={styles.blogIcon}>
                        <FaArrowRight />
                    </a>
                </figure>
            </div>
        </section>
    );
}

export default Blog;
