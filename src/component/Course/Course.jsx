import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import styles from "./Course.module.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Course() {
    return (
        <section className={styles.course}>
            <div className={styles.contentContainer}>
                <div className={styles.greeting}>
                    <li>DISCOVER</li>
                </div>
                <div className={styles.name}>
                    <h1>Course and ...</h1>
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
                    <SwiperSlide className={styles.swiperSlide}>
                        <img
                            src="https://rco-design.com/wp-content/uploads/2020/01/ryan-paonessa_status_featured-e-1440x961.jpg"
                            alt="Practicing yoga outdoors in nature"
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img
                            src="https://rco-design.com/wp-content/uploads/2020/01/ryan-paonessa_status_featured-e-1440x961.jpg"
                            alt="Performing bodyweight exercises for fitness"
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img
                            src="https://rco-design.com/wp-content/uploads/2020/01/ryan-paonessa_status_featured-e-1440x961.jpg"
                            alt="Engaging in mindfulness meditation for stress relief"
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        {" "}
                        <img
                            src="https://rco-design.com/wp-content/uploads/2020/01/ryan-paonessa_status_featured-e-1440x961.jpg"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img
                            src="https://rco-design.com/wp-content/uploads/2020/01/ryan-paonessa_status_featured-e-1440x961.jpg"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img
                            src="https://rco-design.com/wp-content/uploads/2020/01/ryan-paonessa_status_featured-e-1440x961.jpg"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img
                            src="https://rco-design.com/wp-content/uploads/2020/01/ryan-paonessa_status_featured-e-1440x961.jpg"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img
                            src="https://rco-design.com/wp-content/uploads/2020/01/ryan-paonessa_status_featured-e-1440x961.jpg"
                            alt=""
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default Course;
