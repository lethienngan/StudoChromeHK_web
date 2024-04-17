import { FaArrowRight, FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./Footer.module.scss";
import logo from "../../../public/Logo_TAO_white.svg";
function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.item}>
                    <img
                        src={logo}
                        alt=""
                        onClick={() => {
                            window.location.href = "/";
                        }}
                    />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non excepturi dolore, nostrum
                        similique ratione numquam eum deserunt! Dolore veritatis harum laudantium eveniet! Hic
                        voluptatum minima aperiam mollitia, soluta natus, recusandae nihil quod doloribus
                    </p>
                </div>
                <div className={styles.item}>
                    <h1>Our Services</h1>
                    <a href="https://bookings.vibefam.com/studiochromehk/classes" className={styles.title}>
                        <FaArrowRight className={styles.itemIcon} /> Service name
                    </a>
                    <a href="https://bookings.vibefam.com/studiochromehk/classes" className={styles.title}>
                        <FaArrowRight className={styles.itemIcon} /> Service name
                    </a>
                    <a href="https://bookings.vibefam.com/studiochromehk/classes" className={styles.title}>
                        <FaArrowRight className={styles.itemIcon} /> Service name
                    </a>
                </div>
                <div className={styles.item}>
                    <h1>Information</h1>
                    <a href="#contact" className={styles.title}>
                        <FaArrowRight className={styles.itemIcon} /> Contact us
                    </a>
                    <a href="#about" className={styles.title}>
                        <FaArrowRight className={styles.itemIcon} /> About
                    </a>
                </div>
                <div className={styles.item}>
                    <h1>Follow Us</h1>
                    <a href="https://www.instagram.com/studiochromehk/" className={styles.socialMediaIcon}>
                        <FaInstagram />
                    </a>
                    <a href="" className={styles.socialMediaIcon}>
                        <FaTwitter />
                    </a>
                    <a href="https://www.facebook.com/studiochromehk/" className={styles.socialMediaIcon}>
                        <FaFacebookSquare />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
