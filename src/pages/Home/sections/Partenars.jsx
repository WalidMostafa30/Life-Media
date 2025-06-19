import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import inDriveImg from "../../../assets/images/in-drive.png";

const Partenars = () => {
  const partenarsList = [
    inDriveImg,
    inDriveImg,
    inDriveImg,
    inDriveImg,
    inDriveImg,
    inDriveImg,
    inDriveImg,
    inDriveImg,
  ];
  return (
    <section className="sectionPadding">
      <div className="container mb-10">
        <h2 className="text-2xl lg:text-3xl mb-2">
          Trusted by Top Brands Across Industries
        </h2>
        <p className="text-sm lg:text-base">
          We’re proud to have collaborated with companies that lead in
          healthcare, food, finance, and more.
        </p>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        autoplay={{ delay: 1000 }}
        speed={3000}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          1020: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
      >
        {partenarsList.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt={`Partner ${index + 1}`} className="mx-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Partenars;
