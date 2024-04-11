import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import styles from "./Services.module.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Services() {
    return (
        <section className={styles.services}>
            <div className={styles.contentContainer}>
                <div className={styles.greeting}>
                    <li>SERVICES</li>
                </div>
                <div className={styles.name}>
                    <h1>Our Amenities ...</h1>
                    <p>
                        Choose the course you prefer (depending on availability). Choose from a variety of sizes and
                        styles. Lorem ipsum viverra tristique justo duis vitae diaminte neque nivamus aestan artines in
                        the nedana mis erodino fermen.
                    </p>
                </div>
            </div>
            <div className={styles.swiperContainer}>
                <Swiper
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className={styles.mySwiper}
                >
                    <SwiperSlide className={styles.swiperSlide}>Slide 1</SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>Slide 2</SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>Slide 3</SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>Slide 4</SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default Services;
