import { IoMdStar } from "react-icons/io";
import styles from "./Testimonials.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
function Testimonials() {
    return (
        <section className={styles.testimonial}>
            <div className={styles.contentContainer}>
                <div className={styles.greeting}>
                    <li>TESTIMONIALS</li>
                </div>
                <div className={styles.name}>
                    <h1>What Client's Say</h1>
                </div>
            </div>
            <div className={styles.swiperContainer}>
                <Swiper
                    // slidesPerView={1}
                    // spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className={styles.mySwiper}
                >
                    <SwiperSlide className={styles.swiperSlide}>
                        <img
                            src="https://www.daniosorio.com/wp-content/uploads/2018/03/portrait-faces-and-photography-french-woman-clara.jpg"
                            alt=""
                        />
                        <p>
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                        </p>
                        <p>
                            &quot;Hotel was great. Location was excellent in that it was close to everywhere I wanted to
                            go. The staff was incredible. At my every beckoning and call. Room was smaller than I'd like
                            but this was NY so to be expected. A great experience all around!&quot;
                        </p>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img src="https://cdn.mos.cms.futurecdn.net/p5quSf4dZXctG9WFepXFdR-1200-80.jpg" alt="" />
                        <p>
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                        </p>
                        <p>
                            &quot;Hotel was great. Location was excellent in that it was close to everywhere I wanted to
                            go. The staff was incredible. At my every beckoning and call. Room was smaller than I'd like
                            but this was NY so to be expected. A great experience all around!&quot;
                        </p>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img
                            src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
                            alt=""
                        />
                        <p>
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                        </p>
                        <p>
                            &quot;Hotel was great. Location was excellent in that it was close to everywhere I wanted to
                            go. The staff was incredible. At my every beckoning and call. Room was smaller than I'd like
                            but this was NY so to be expected. A great experience all around!&quot;
                        </p>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img
                            src="https://www.daniosorio.com/wp-content/uploads/2018/03/portrait-faces-and-photography-french-woman-clara.jpg"
                            alt=""
                        />
                        <p>
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                        </p>
                        <p>
                            &quot;Hotel was great. Location was excellent in that it was close to everywhere I wanted to
                            go. The staff was incredible. At my every beckoning and call. Room was smaller than I'd like
                            but this was NY so to be expected. A great experience all around!&quot;
                        </p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default Testimonials;
