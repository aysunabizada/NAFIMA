import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";

function EmployeeSlider() {
    return (
        <Swiper
            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false
            }}
            speed={3000}
            breakpoints={{
                300: { slidesPerView: 3, spaceBetween: 10, },
                500: { slidesPerView: 4, spaceBetween: 10, },
                768: { slidesPerView: 5, spaceBetween: 10, },
                992: { slidesPerView: 5, spaceBetween: 10, },
                1024: { slidesPerView: 6, spaceBetween: 10, },
                1280: { slidesPerView: 8, spaceBetween: 10, },
            }}
            modules={[Autoplay]}
            className="mySwiper py-5">
            {
                new Array(10).fill(null).map((_, item) =>
                    <SwiperSlide key={item} className="w-36 h-32 flex items-center justify-center">
                        <div className="w-24 h-24 overflow-hidden flex items-center justify-center">
                            <img
                                className="object-contain w-full h-full transition-all duration-500 cursor-pointer hover:scale-105"
                                src={`./src/assets/img/sponsor${item + 1}.png`}
                                alt="sponsors"
                            />
                        </div>
                    </SwiperSlide>
                )
            }

        </Swiper>
    )
}
export default EmployeeSlider