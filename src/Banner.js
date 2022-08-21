import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./App.css";

export default function App(props) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                centeredSlides={true}
                loop={true}
                breakpoints={{
                    480: {
                        slidesPerView: 2,
                    }
                }}
                autoplay={{
                    delay: 2500
                }}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {props.cards.map((card, index) => (
                    <SwiperSlide id={card.id}>
                        <div className="card">
                            <a href="#">
                                <img src={card.imgUrl} alt={`${card.mainText} banner`} />
                                <div className="text-container">
                                    <div className="main-text">{card.mainText}</div>
                                    <div className="sub-text">{card.subText}</div>
                                </div>
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
