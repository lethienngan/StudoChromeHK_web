import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import styles from "./Services.module.scss";
import { GrYoga } from "react-icons/gr";
import { IoFitnessOutline } from "react-icons/io5";
import { CgGym } from "react-icons/cg";

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
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.card}>
                            <GrYoga className={styles.cardIcon} />
                            <p className={styles.cardTitle}>Yoga for Children</p>
                            <p className={styles.cardSubtitle}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolorum.
                            </p>
                            <div className={styles.cardNumber}>
                                <p>01</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.card}>
                            <IoFitnessOutline className={styles.cardIcon} />
                            <p className={styles.cardTitle}>Fitness</p>
                            <p className={styles.cardSubtitle}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolorum.
                            </p>
                            <div className={styles.cardNumber}>
                                <p>02</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.card}>
                            <CgGym className={styles.cardIcon} />
                            <p className={styles.cardTitle}>Pole Dancing</p>
                            <p className={styles.cardSubtitle}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolorum.
                            </p>
                            <div className={styles.cardNumber}>
                                <p>03</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.card}>
                            <GrYoga className={styles.cardIcon} />
                            <p className={styles.cardTitle}>Pole Dancing</p>
                            <p className={styles.cardSubtitle}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolorum.
                            </p>
                            <div className={styles.cardNumber}>
                                <p>04</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.card}>
                            <GrYoga className={styles.cardIcon} />
                            <p className={styles.cardTitle}>Pole Dancing</p>
                            <p className={styles.cardSubtitle}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolorum.
                            </p>
                            <div className={styles.cardNumber}>
                                <p>05</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default Services;
