"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Banner {
  id: number;
  src: string;
  title: string;
  description: string;
}

const bannerItem: Banner[] = [
  {
    id: 1,
    src: "https://sktperfectdemo.com/demos/it-solutions/wp-content/themes/it-solution-pro/images/slides/slider1.jpg",
    title: "Blue Air",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, doloribus?",
  },
  {
    id: 2,
    src: "https://sktperfectdemo.com/demos/it-solutions/wp-content/themes/it-solution-pro/images/slides/slider2.jpg",
    title: "Smart Flying",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, doloribus?",
  },
  {
    id: 3,
    src: "https://sktperfectdemo.com/demos/it-solutions/wp-content/themes/it-solution-pro/images/slides/slider3.jpg",
    title: "Fly High",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, doloribus?",
  },
];

function BannerSlide({ src, title, description }: Banner) {
  return (
    <div
      style={{
        background: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="text-center max-w-lg mx-auto flex flex-col justify-center h-[400px] lg:h-[473px]">
          <h1 className="text-xl/[26px] text-[#0165B2] font-semibold pb-5">
            {title}
          </h1>
          <p className="text-[#fff]">{description}</p>
        </div>
      </div>
    </div>
  );
}

const Banner = () => {
  return (
    <section>
      <Swiper
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
      >
        {bannerItem.map((item) => (
          <SwiperSlide key={item.id}>
            <BannerSlide {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
