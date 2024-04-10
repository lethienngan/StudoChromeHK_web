import styles from "./About.module.scss";
function About() {
    return (
        <section className={styles.about}>
            <div className={styles.contentContainer}>
                <div className={styles.greeting}>
                    <li>WE ARE</li>
                </div>
                <div className={styles.name}>
                    <p>ChromeStudioHK</p>
                </div>
            </div>
            <div className={styles.gridContainer}>
                <figure className={`${styles.gridItem} ${styles.gridItem1}`}>
                    <img
                        src="https://rco-design.com/wp-content/uploads/2020/01/ryan-paonessa_lic-beer-project_featured-img-700x500.jpg"
                        alt=""
                    />
                </figure>
                <figure className={`${styles.gridItem} ${styles.gridItem2}`}>
                    <img
                        src="https://rco-design.com/wp-content/uploads/2020/01/ryan-paonessa_lic-beer-project_featured-img-700x500.jpg"
                        alt=""
                    />
                </figure>
                <figure className={`${styles.gridItem} ${styles.gridItem3}`}>
                    <img
                        src="https://rco-design.com/wp-content/uploads/2020/01/ryan-paonessa_status_featured-e-1440x961.jpg"
                        alt=""
                    />
                </figure>
                <figure className={`${styles.gridItem} ${styles.gridItem4}`}>
                    <img
                        src="https://rco-design.com/wp-content/uploads/2020/01/ryan-paonessa_status_featured-e-1440x961.jpg"
                        alt=""
                    />
                </figure>
                <figure className={`${styles.gridItem} ${styles.gridItem5}`}>
                    <img
                        src="https://rco-design.com/wp-content/uploads/2020/01/ryan-paonessa_status_featured-e-1440x961.jpg"
                        alt=""
                    />
                </figure>
                <figure className={`${styles.gridItem} ${styles.gridItem6}`}>
                    <img
                        src="https://rco-design.com/wp-content/uploads/2020/01/ryan-paonessa_status_featured-e-1440x961.jpg"
                        alt=""
                    />
                </figure>
            </div>
        </section>
    );
}

export default About;
