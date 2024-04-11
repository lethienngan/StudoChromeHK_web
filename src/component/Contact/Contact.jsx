import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import styles from "./Contact.module.scss";
function Contact() {
    return (
        <section className={styles.contact}>
            <div className={styles.contentContainer}>
                <div className={styles.greeting}>
                    <li>CONTACT</li>
                </div>
                <div className={styles.name}>
                    <h1>KEEP IN TOUCH WITH US</h1>
                    <p>
                        Choose the course you prefer (depending on availability). Choose from a variety of sizes and
                        styles. Lorem ipsum viverra tristique justo duis vitae diaminte neque nivamus aestan artines in
                        the nedana mis erodino fermen.
                    </p>
                </div>
            </div>
            <div className={styles.contactContainer}>
                <div className={styles.item}>
                    <div className={styles.itemIcon}>
                        <FaPhoneVolume />
                    </div>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemTitle}>By Phone</h3>
                        <p className={styles.itemInfo}>0992831289</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemIcon}>
                        <MdEmail />
                    </div>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemTitle}>By Email</h3>
                        <p className={styles.itemInfo}>something@gmail.com</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemIcon}>
                        <FaPhoneVolume />
                    </div>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemTitle}>Addres</h3>
                        <p className={styles.itemInfo}>38 Broadway NY, 1001 USA</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
