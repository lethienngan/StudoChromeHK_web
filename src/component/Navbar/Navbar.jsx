import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
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
                <div className={styles.logoWrapper}>StudioChromeHK</div>
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
                            <a className={styles.navLink}>About</a>
                        </li>
                        <li className={styles.navItem}>
                            <a className={styles.navLink}>Contact</a>
                        </li>
                        <li className={styles.navItem}>
                            <a className={styles.navLink}></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
