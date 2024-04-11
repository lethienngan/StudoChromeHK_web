import styles from "./PopupModal.module.scss";
function PopupModal({ children, closeModal }) {
    return (
        <div className={styles.overlay} onClick={closeModal}>
            <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default PopupModal;
