import { GrNext, GrPrevious } from "react-icons/gr";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import header1 from "../../assets/header/header_1.jpg";
import header2 from "../../assets/header/header_2.jpg";
import header3 from "../../assets/header/header_3.jpg";
function Header() {
    const [imgList, setImgList] = useState([]);
    const [currentImg, setCurrentImg] = useState(0);

    // preload local Images
    useEffect(() => {
        setImgList([header1, header2, header3]);
    }, []);
    // useEffect(() => {
    //     const assignLocalImg = async () => {
    //         const images = await import.meta.glob("../header/header_*.jpg");
    //         const imagesPath = Object.keys(images).map((img) => img);
    //         setImgList(imagesPath);
    //     };
    //     assignLocalImg();
    // }, []);

    const handleSlide = (type) => {
        if (type === "decrease") {
            setCurrentImg((prev) => (prev !== 0 ? prev - 1 : imgList.length - 1));
        } else if (type === "increase") {
            setCurrentImg((prev) => (prev === imgList.length - 1 ? 0 : prev + 1));
        } else {
            console.log("wrong arg: decrease | increase");
        }
    };

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.slider}>
                    {imgList.map((img, index) => (
                        <>
                            <img
                                className={
                                    index === currentImg
                                        ? `${styles.imgItem} ${styles.show}`
                                        : `${styles.imgItem} ${styles.hide}`
                                }
                                key={img}
                                src={img}
                                alt=""
                            />
                            <div key={`${index}content`} className={index === currentImg ? styles.contentWrapper : ""}>
                                <p>Welcome to {index}</p>
                                <h2>ChrommeHK {index}</h2>
                                <h1>Yoga and Fitness {index}</h1>
                            </div>
                        </>
                    ))}
                </div>
                <div className={styles.btnLeft} onClick={() => handleSlide("decrease")}>
                    <GrPrevious />
                </div>
                <div className={styles.btnRight} onClick={() => handleSlide("increase")}>
                    <GrNext />
                </div>
                <div className={styles.checkOutWrapper}>
                    <a className={styles.checkOutContent}>Check Out</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
