import { useEffect, useState } from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import styles from "./Navbar.module.scss";
import logo from "../../../public/Logo_TAO_black.svg";
function Navbar() {
    // "Home", "About", "Rooms", "Amenities", "Services"
    const [navItems, setNavItems] = useState(["Blog", "Contact"]);
    const [scrollTrigger, setScrollTrigger] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrollTrigger(true);
            } else {
                setScrollTrigger(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={`${styles.navbar} ${scrollTrigger ? styles.showBackground : styles.hideBackground}`}>
            <div className={styles.container}>
                <div className={styles.logoWrapper}>
                    <img
                        src={logo}
                        alt="Yoga poses for flexibility and relaxation"
                        onClick={() => {
                            window.location.href = "/";
                        }}
                    />
                </div>
                <div className={styles.navList}>
                    {/* <ul className={styles.navItemWrapper}>
                        {navItems.map((item, index) => (
                            <li key={index} className={styles.navItem}>
                                <a className={styles.navLink}>{item}</a>
                            </li>
                        ))}
                    </ul> */}
                    <ul className={styles.navItemWrapper}>
                        <li className={styles.navItem}>
                            <a className={styles.navLink} href="#about">
                                About
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a className={styles.navLink} href="#contact">
                                Contact
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="https://www.facebook.com/studiochromehk" className={styles.navLink}>
                                <FaFacebookSquare className={styles.socialMediaIcon} />
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="https://www.instagram.com/studiochromehk/" className={styles.navLink}>
                                <FaInstagram className={styles.socialMediaIcon} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
