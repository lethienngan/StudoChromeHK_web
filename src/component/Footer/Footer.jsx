import { FaArrowRight, FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./Footer.module.scss";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.item}>
                    <h1>LOGO here</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non excepturi dolore, nostrum
                        similique ratione numquam eum deserunt! Dolore veritatis harum laudantium eveniet! Hic
                        voluptatum minima aperiam mollitia, soluta natus, recusandae nihil quod doloribus
                    </p>
                </div>
                <div className={styles.item}>
                    <h1>Our Services</h1>
                    <a href="">
                        <FaArrowRight className={styles.itemIcon}/> Service name
                    </a>
                    <a href="">
                        <FaArrowRight className={styles.itemIcon}/> Service name
                    </a>
                    <a href="">
                        <FaArrowRight className={styles.itemIcon}/> Service name
                    </a>
                </div>
                <div className={styles.item}>
                    <h1>Information</h1>
                    <a href="">
                        <FaArrowRight className={styles.itemIcon}/> Contact us
                    </a>
                </div>
                <div className={styles.item}>
                    <h1>Follow Us</h1>
                    <a href="" className={styles.socialMediaIcon}>
                        <FaInstagram />
                    </a>
                    <a href="" className={styles.socialMediaIcon}>
                        <FaTwitter />
                    </a>
                    <a href="" className={styles.socialMediaIcon}>
                        <FaFacebookSquare />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
