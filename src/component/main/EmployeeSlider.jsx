import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import sponsor1 from '../../assets/img/sponsor1.png';
import sponsor2 from '../../assets/img/sponsor2.png';
import sponsor3 from '../../assets/img/sponsor3.png';
import sponsor4 from '../../assets/img/sponsor4.png';
import sponsor5 from '../../assets/img/sponsor5.png';
import sponsor6 from '../../assets/img/sponsor6.png';
import sponsor7 from '../../assets/img/sponsor7.png';
import sponsor8 from '../../assets/img/sponsor8.png';
import sponsor9 from '../../assets/img/sponsor9.png';
import sponsor10 from '../../assets/img/sponsor10.png';

const sponsorImages = [
    sponsor1, sponsor2, sponsor3, sponsor4, sponsor5,
    sponsor6, sponsor7, sponsor8, sponsor9, sponsor10
];

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
                {sponsorImages.map((image, index) => (
                    <SwiperSlide key={index} className="w-36 h-32 flex items-center justify-center">
                        <div className="w-24 h-24 overflow-hidden flex items-center justify-center">
                            <img
                            className="object-contain w-full h-full transition-all duration-500 cursor-pointer hover:scale-105"
                            src={image}
                            alt={`sponsor-${index + 1}`}/>
                        </div>
                    </SwiperSlide>
                ))}
        </Swiper>
    )
}
export default EmployeeSlider