import { FaPlay } from "react-icons/fa";
import styles from "./Promo.module.scss";
import PopupModal from "../PopupModal/PopupModal";
import { useState } from "react";
function Promo() {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);
    return (
        <section className={styles.promo}>
            <div className={styles.content}>
                <p className={styles.subtitle}>STUDIOCHROME YOGA & FITNESS HOUSE</p>
                <h1 className={styles.title}>Checkout Promotional Video</h1>
            </div>
            <div className={styles.popup}>
                <div className={styles.popupBtn} onClick={() => setShowModal(true)}>
                    <FaPlay className={styles.popupIcon} />
                </div>
                {showModal && (
                    <PopupModal closeModal={closeModal}>
                        <iframe className={styles.youtubeIframe}
                            src="https://www.youtube.com/embed/2Ftt5T9zX3A?si=oWur4M4zo0lNlDSy&amp;start=13"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </PopupModal>
                )}
            </div>
        </section>
    );
}

export default Promo;
